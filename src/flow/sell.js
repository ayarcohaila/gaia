import { fcl, t } from '../config/config';

const SALE_NFT_TX = fcl.cdc`
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import FlowToken from 0xFlowToken
import FlowAssets from 0xNFTContract
import FlowAssetsMarket from 0xNFTMarket

transaction(saleAssetID: UInt64, salePrice: UFix64, marketFee: UFix64, templateID: UInt64, marketPaymentReceiver: UInt64) {
    let flowVault: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let AssetsCollection: Capability<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>
    let marketCollection: &FlowAssetsMarket.Collection

    prepare(signer: AuthAccount) {
        // we need a provider capability, but one is not provided by default so we create one.
        let AssetsCollectionProviderPrivatePath = /private/AssetsCollectionProvider

        let FlowTokenReceiverPublicPath = /public/flowTokenReceiver
        let FlowTokenVaultStoragePath = /storage/flowTokenVault

    
        self.flowVault = signer.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(FlowToken.ReceiverPublicPath)!
        assert(self.flowVault.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

        if !signer.getCapability<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>(FlowAssetsCollectionProviderPrivatePath)!.check() {
          signer.link<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>(FlowAssetsCollectionProviderPrivatePath, target: FlowAssets.CollectionStoragePath)
        }

        self.AssetsCollection = signer.getCapability<&FlowAssets.Collection{NonFungibleToken.Provider}>(AssetsCollectionProviderPrivatePath)!
        assert(self.AssetsCollection.borrow() != nil, message: "Missing or mis-typed AssetsCollectionProvider provider")

        self.marketCollection = signer.borrow<&FlowAssetsMarket.Collection>(from: FlowAssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed FlowAssetsMarket Collection")
    }

    //Referencia do contrato assetMarket
    //sellerAssetProvider: Capability<&FlowAssets.Collection{NonFungibleToken.Provider}>,
    //saleAssetID: UInt64,
    //sellerPaymentReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>,
    //salePrice: UFix64

    execute {
        let offer <- FlowAssetsMarket.createSaleOffer (
            sellerItemProvider: self.AssetsCollection,
            itemID: saleAssetID,
            sellerPaymentReceiver: self.flowVault,
            price: salePrice,
            marketFee: marketFee,
            templateID: templateID,
            marketPaymentReceiver: marketPaymentReceiver
        )
        self.marketCollection.insert(offer: <-offer)
    }
}
`;

export async function createSaleOffer(
  saleAssetID,
  salePrice,
  marketFee,
  templateID,
  marketPaymentReceiver
) {
  if (saleAssetID == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- saleAssetID required'
    );
  if (salePrice == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- salePrice required'
    );
  if (marketFee == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- marketFee required'
    );
  if (templateID == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- templateID required'
    );
  if (marketPaymentReceiver == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- marketPaymentReceiver required'
    );
  const correctSalePrice = salePrice.toFixed(8);
  const txId = await fcl
    .send([
      fcl.transaction(SALE_NFT_TX),
      //salePrice must have 1. something , INT are not accepted by this transaction
      fcl.args([fcl.arg(saleAssetID, t.UInt64), fcl.arg(correctSalePrice, t.UFix64)]),
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(1000)
    ])
    .then(fcl.decode);

  return fcl.tx(txId).onceSealed();
}
