import { Spin, notification } from 'antd';

import { fcl, t } from '../config/config';

const SALE_NFT_TX = `
  import FungibleToken from 0xFungibleToken
  import NonFungibleToken from 0xNFTInterface
  import FlowToken from 0xFlowToken
  import FlowAssets from 0xNFTContract
  import FlowAssetsMarket from 0xNFTMarket

  transaction(saleAssetID: UInt64, salePrice: UFix64, templateID: UInt64) {
    let flowTokenVault: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let flowAssetsCollection: Capability<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>
    let marketCollection: &FlowAssetsMarket.Collection
    let marketFee: UFix64

    prepare(signer: AuthAccount) {
        // we need a provider capability, but one is not provided by default so we create one.
        let FlowAssetsCollectionProviderPrivatePath = /private/flowAssetsCollectionProvider

        self.flowTokenVault = signer.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!
        assert(self.flowTokenVault.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

        if !signer.getCapability<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>(FlowAssetsCollectionProviderPrivatePath)!.check() {
            signer.link<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>(FlowAssetsCollectionProviderPrivatePath, target: FlowAssets.CollectionStoragePath)
        }

        self.flowAssetsCollection = signer.getCapability<&FlowAssets.Collection{NonFungibleToken.Provider, FlowAssets.FlowAssetsCollectionPublic}>(FlowAssetsCollectionProviderPrivatePath)!
        assert(self.flowAssetsCollection.borrow() != nil, message: "Missing or mis-typed FlowAssetsCollection provider")

        self.marketCollection = signer.borrow<&FlowAssetsMarket.Collection>(from: FlowAssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed FlowAssetsMarket Collection")


    // borrow a reference to the signer's NFT collection
    let collectionRef = signer.borrow<&FlowAssets.Collection>(from: FlowAssets.CollectionStoragePath)
        ?? panic("Could not borrow a reference to the owner's collection")

    // get asset set id
    let asset = collectionRef.borrowFlowAsset(id: saleAssetID)!
    let setiD = asset.data.setID

    // get market fee by set id
    self.marketFee = FlowAssets.getSetMarketFee(setID: setiD)!

    }
    execute {
      let offer <- FlowAssetsMarket.createSaleOffer (
        sellerItemProvider: self.flowAssetsCollection,
        itemID: saleAssetID,
        templateID: templateID,
        sellerPaymentReceiver: self.flowTokenVault,
        marketPaymentReceiver: self.flowTokenVault,
        price: salePrice,
        marketFee: self.marketFee
    )
        self.marketCollection.insert(offer: <-offer)
    }
}
`;

export async function createSaleOffer(saleAssetID, salePrice, templateID) {
  if (saleAssetID == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- saleAssetID required'
    );
  if (salePrice == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- salePrice required'
    );
  if (templateID == null)
    throw new Error(
      'createSaleOffer(saleAssetID, salePrice, marketFee, templateID, marketPaymentReceiver) -- templateID required'
    );
  const correctSalePrice = Number(salePrice).toFixed(8);
  try {
    const txId = await fcl
      .send([
        fcl.transaction(SALE_NFT_TX),
        //salePrice must have 1. something , INT are not accepted by this transaction
        fcl.args([
          fcl.arg(Number(saleAssetID), t.UInt64),
          fcl.arg(Number(correctSalePrice).toFixed(8), t.UFix64),
          fcl.arg(Number(templateID), t.UInt64)
        ]),
        fcl.proposer(fcl.authz),
        fcl.payer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(1000)
      ])
      .then(fcl.decode);
    notification.open({
      key: `sale_${saleAssetID}`,
      icon: <Spin />,
      message: `Creating an offer for ID #${saleAssetID}`,
      description: 'Sending transaction to the blockchain',
      duration: null
    });
    return fcl.tx(txId).onceSealed();
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
