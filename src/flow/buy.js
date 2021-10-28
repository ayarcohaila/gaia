import { fcl, t } from '../config/config';
import { isDapper } from '../utils/currencyCheck';

const BUY_NFT_TX = isDapper
  ? fcl.cdc`
  import FungibleToken from 0xFungibleToken
  import NonFungibleToken from 0xNFTContractStorefront
  import DapperUtilityCoin from 0xDapperUtilityCoin
  import Gaia from 0xGaiaContract
  import NFTStorefront from 0xStorefrontContract
  
  transaction(listingResourceID: UInt64, storefrontAddress: Address) {
      let paymentVault: @FungibleToken.Vault
      let GaiaCollection: &Gaia.Collection{NonFungibleToken.Receiver}
      let storefront: &NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}
      let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}
  
      prepare(acct: AuthAccount) {
          self.storefront = getAccount(storefrontAddress)
              .getCapability<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(
                  NFTStorefront.StorefrontPublicPath
              )!
              .borrow()
              ?? panic("Could not borrow Storefront from provided address")
  
          self.listing = self.storefront.borrowListing(listingResourceID: listingResourceID)
                      ?? panic("No Offer with that ID in Storefront")
          let price = self.listing.getDetails().salePrice
  
          let mainDucVault = acct.borrow<&DapperUtilityCoin.Vault>(from: /storage/dapperUtilityCoinReceiver)
              ?? panic("Cannot borrow DapperUtilityCoin vault from acct storage")
          self.paymentVault <- mainDucVault.withdraw(amount: price)
  
          self.GaiaCollection = acct.borrow<&Gaia.Collection{NonFungibleToken.Receiver}>(
              from: Gaia.CollectionStoragePath
          ) ?? panic("Cannot borrow NFT collection receiver from account")
      }
  
      execute {
          let item <- self.listing.purchase(
              payment: <-self.paymentVault
          )
          
          self.GaiaCollection.deposit(token: <-item)
          self.storefront.cleanup(listingResourceID: listingResourceID)
      }
  }` //duc
  : fcl.cdc`
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import FlowToken from 0xFlowToken
import Gaia from 0xGaiaContract
import NFTStorefront from 0xStorefrontContract

transaction(listingResourceID: UInt64, ownerAddress: Address) {
    let paymentVault: @FungibleToken.Vault
    let GaiaCollection: &Gaia.Collection{NonFungibleToken.Receiver}
    let storefront: &NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}
    let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}

    prepare(acct: AuthAccount) {
        self.storefront = getAccount(ownerAddress)
            .getCapability<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(
                NFTStorefront.StorefrontPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow Storefront from provided address")

        self.listing = self.storefront.borrowListing(listingResourceID: listingResourceID)
                    ?? panic("No Offer with that ID in Storefront")
        let price = self.listing.getDetails().salePrice

        let mainFlowVault = acct.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("Cannot borrow FlowToken vault from acct storage")
        self.paymentVault <- mainFlowVault.withdraw(amount: price)

        self.GaiaCollection = acct.borrow<&Gaia.Collection{NonFungibleToken.Receiver}>(
            from: Gaia.CollectionStoragePath
        ) ?? panic("Cannot borrow NFT collection receiver from account")
    }

    execute {
        let item <- self.listing.purchase(
            payment: <-self.paymentVault
        )
        
        self.GaiaCollection.deposit(token: <-item)
        self.storefront.cleanup(listingResourceID: listingResourceID)
    }
}
`;

export async function buy(listingResourceID, ownerAddress) {
  if (listingResourceID == null)
    throw new Error('buy(listingResourceID, ownerAddress) -- listingResourceID required');
  if (ownerAddress == null)
    throw new Error('buy(listingResourceID, ownerAddress) -- ownerAddress required');
  try {
    const txId = await fcl
      .send([
        fcl.transaction(BUY_NFT_TX),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(listingResourceID, t.UInt64), fcl.arg(ownerAddress, t.Address)]),
        fcl.limit(1000)
      ])
      .then(fcl.decode);
    const sealedTx = await fcl.tx(txId).onceSealed();
    return {
      txId,
      sealedTx
    };
  } catch (err) {
    throw new Error(err);
  }
}
