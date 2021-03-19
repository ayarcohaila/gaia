import FungibleToken from "../../contracts/FungibleToken.cdc"
import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import FlowToken from "../../contracts/FlowToken.cdc"
import Assets from "../../contracts/Assets.cdc"
import AssetsMarket from "../../contracts/AssetsMarket.cdc"

transaction(saleItemID: UInt64, saleItemPrice: UFix64) {
    let flowVault: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let AssetsCollection: Capability<&Assets.Collection{NonFungibleToken.Provider}>
    let marketCollection: &AssetsMarket.Collection

    prepare(signer: AuthAccount) {
        // we need a provider capability, but one is not provided by default so we create one.
        let AssetsCollectionProviderPrivatePath = /private/AssetsCollectionProvider

        self.flowVault = signer.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(FlowToken.ReceiverPublicPath)!
        assert(self.flowVault.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

        if !signer.getCapability<&Assets.Collection{NonFungibleToken.Provider}>(AssetsCollectionProviderPrivatePath)!.check() {
            signer.link<&Assets.Collection{NonFungibleToken.Provider}>(AssetsCollectionProviderPrivatePath, target: Assets.CollectionStoragePath)
        }

        self.AssetsCollection = signer.getCapability<&Assets.Collection{NonFungibleToken.Provider}>(AssetsCollectionProviderPrivatePath)!
        assert(self.AssetsCollection.borrow() != nil, message: "Missing or mis-typed KittyItemsCollection provider")

        self.marketCollection = signer.borrow<&AssetsMarket.Collection>(from: AssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed AssetsMarket Collection")
    }

    execute {
        let offer <- AssetsMarket.createSaleOffer (
            sellerItemProvider: self.AssetsCollection,
            saleItemID: saleItemID,
            sellerPaymentReceiver: self.flowVault,
            salePrice: saleItemPrice
        )
        self.marketCollection.insert(offer: <-offer)
    }
}