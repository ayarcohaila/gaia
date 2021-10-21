import { fcl, t } from '../config/config';

const BUY_NFT_TX = fcl.cdc`
import FungibleToken from "../contracts/FungibleToken.cdc"
import NonFungibleToken from "../contracts/NonFungibleToken.cdc"
import FlowToken from "../contracts/FlowToken.cdc"
import Gaia from "../contracts/Gaia.cdc"
import NFTStorefront from "../contracts/NFTStorefront.cdc"

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

export async function buy(listingResourceID, storefrontAddress) {
  if (listingResourceID == null)
    throw new Error('buy(listingResourceID, storefrontAddress) -- listingResourceID required');
  if (storefrontAddress == null)
    throw new Error('buy(listingResourceID, storefrontAddress) -- storefrontAddress required');
  try {
    const txId = await fcl
      .send([
        fcl.transaction(BUY_NFT_TX),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(listingResourceID, t.UInt64), fcl.arg(storefrontAddress, t.Address)]),
        fcl.limit(1000)
      ])
      .then(fcl.decode);
    return fcl.tx(txId).onceSealed();
  } catch (err) {
    throw new Error(`Error on trying to buy: ${err.message}`);
  }
}
