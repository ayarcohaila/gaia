/* eslint-disable no-console */

import { fcl, t } from '../config/config';

const SALE_NFT_TX = `
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import FlowToken from 0xFlowToken
import Gaia from 0xGaiaContract
import NFTStorefront from 0xStorefrontContract

transaction(saleItemID: UInt64, saleItemPrice: UFix64) {
  let flowReceiver: Capability<&{FungibleToken.Receiver}>
  let GaiaProvider: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
  let storefront: &NFTStorefront.Storefront

  prepare(acct: AuthAccount) {

      // We need a provider capability, but one is not provided by default so we create one if needed.
      let GaiaCollectionProviderPrivatePath = /private/GaiaCollectionProviderForNFTStorefront

      self.flowReceiver = acct.getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver)
      assert(self.flowReceiver.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")
      
      if !acct.getCapability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(GaiaCollectionProviderPrivatePath)!.check() {
          acct.link<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(GaiaCollectionProviderPrivatePath, target: Gaia.CollectionStoragePath)
      }

      self.GaiaProvider = acct.getCapability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(GaiaCollectionProviderPrivatePath)
      assert(self.GaiaProvider.borrow() != nil, message: "Missing or mis-typed Gaia.Collection provider")

      self.storefront = acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath)
          ?? panic("Missing or mis-typed NFTStorefront Storefront")
  }

  execute {
      let saleCut = NFTStorefront.SaleCut(
          receiver: self.flowReceiver,
          amount: saleItemPrice
      )
      self.storefront.createListing(
          nftProviderCapability: self.GaiaProvider,
          nftType: Type<@Gaia.NFT>(),
          nftID: saleItemID,
          salePaymentVaultType: Type<@FlowToken.Vault>(),
          saleCuts: [saleCut]
      )
  }
}
`;

export async function sellItem(saleItemID, saleItemPrice) {
  if (saleItemID == null)
    throw new Error('sellItem(saleItemID, saleItemPrice) -- saleItemID required');
  if (saleItemPrice == null)
    throw new Error('sellItem(saleItemID, saleItemPrice) -- saleItemPrice required');
  const correctSalePrice = Number(saleItemPrice).toFixed(8);
  try {
    const txId = await fcl
      .send([
        fcl.transaction(SALE_NFT_TX),
        //salePrice must have 1. something , INT are not accepted by this transaction
        fcl.args([
          fcl.arg(Number(saleItemID), t.UInt64),
          fcl.arg(Number(correctSalePrice).toFixed(8), t.UFix64)
        ]),
        fcl.proposer(fcl.authz),
        fcl.payer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(1000)
      ])
      .then(async a => {
        let response = await fcl.decode(a);
        return response;
      });

    const sealedTx = await fcl.tx(txId).onceSealed();
    return {
      txId,
      sealedTx
    };
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
