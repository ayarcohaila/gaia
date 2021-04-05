import { fcl, t } from '../config/config';

const SALE_NFT_TX = fcl.cdc`
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import FlowToken from 0xFlowToken
import Assets from 0xNFTContract
import AssetsMarket from 0xNFTMarket

transaction(saleAssetID: UInt64, salePrice: UFix64, owner: Address) {
    let flowVault: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let AssetsCollection: Capability<&Assets.Collection{NonFungibleToken.Provider}>
    let marketCollection: &AssetsMarket.Collection
    prepare(signer: AuthAccount) {
        // we need a provider capability, but one is not provided by default so we create one.
        let AssetsCollectionProviderPrivatePath = /private/AssetsCollectionProvider
        let FlowTokenReceiverPublicPath = /public/flowTokenReceiver
        let FlowTokenVaultStoragePath = /storage/flowTokenVault
       
    
        self.flowVault = signer.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!

        assert(self.flowVault.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

       

        self.AssetsCollection = signer.getCapability<&Assets.Collection{NonFungibleToken.Provider}>(AssetsCollectionProviderPrivatePath)!
        assert(self.AssetsCollection.borrow() != nil, message: "Missing or mis-typed AssetsCollectionProvider provider")

        self.marketCollection = signer.borrow<&AssetsMarket.Collection>(from: AssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed AssetsMarket Collection")
    }

    //Referencia do contrato assetMarket
    //sellerAssetProvider: Capability<&Assets.Collection{NonFungibleToken.Provider}>,
    //saleAssetID: UInt64,
    //sellerPaymentReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>,
    //salePrice: UFix64

    execute {
        let offer <- AssetsMarket.createSaleOffer (
            sellerAssetProvider: self.AssetsCollection,
            saleAssetID: saleAssetID,
            saleOwner: owner,
            sellerPaymentReceiver: self.flowVault,
            salePrice: salePrice
        )
        self.marketCollection.insert(offer: <-offer)
    }
}
`;

export async function createSaleOffer(saleAssetID, salePrice, owner) {
  if (saleAssetID == null)
    throw new Error('createSaleOffer(saleAssetID, salePrice) -- saleAssetID required');
  if (salePrice == null)
    throw new Error('createSaleOffer(saleAssetID, salePrice) -- salePrice required');
  const correctSalePrice = salePrice.toFixed(8);
  const txId = await fcl
    .send([
      fcl.transaction(SALE_NFT_TX),
      //salePrice must have 1. something , INT are not accepted by this transaction
      fcl.args([
        fcl.arg(saleAssetID, t.UInt64),
        fcl.arg(correctSalePrice, t.UFix64),
        fcl.arg(owner, t.Address)
      ]),
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(1000)
    ])
    .then(fcl.decode);

  return fcl.tx(txId).onceSealed();
}
