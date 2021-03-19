import FungibleToken from "../../contracts/FungibleToken.cdc"
import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import FlowToken from "../../contracts/FlowToken.cdc"
import Assets from "../../contracts/Assets.cdc"
import AssetsMarket from "../../contracts/AssetsMarket.cdc"

transaction(saleItemID: UInt64, marketCollectionAddress: Address) {
    let paymentVault: @FungibleToken.Vault
    let AssetsCollection: &Assets.Collection{NonFungibleToken.Receiver}
    let marketCollection: &AssetsMarket.Collection{AssetsMarket.CollectionPublic}

    prepare(signer: AuthAccount) {
        self.marketCollection = getAccount(marketCollectionAddress)
            .getCapability<&AssetsMarket.Collection{AssetsMarket.CollectionPublic}>(
                AssetsMarket.CollectionPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow market collection from market address")

        let saleItem = self.marketCollection.borrowSaleItem(saleItemID: saleItemID)
                    ?? panic("No item with that ID")
        let price = saleItem.salePrice

        let mainFlowTokenVault = signer.borrow<&FlowToken.Vault>(from: FlowToken.VaultStoragePath)
            ?? panic("Cannot borrow FlowToken vault from acct storage")
        self.paymentVault <- mainFlowTokenVault.withdraw(amount: price)

        self.AssetsCollection = signer.borrow<&Assets.Collection{NonFungibleToken.Receiver}>(
            from: Assets.CollectionStoragePath
        ) ?? panic("Cannot borrow Assets collection receiver from acct")
    }

    execute {
        self.marketCollection.purchase(
            saleItemID: saleItemID,
            buyerCollection: self.AssetsCollection,
            buyerPayment: <- self.paymentVault
        )
    }
}