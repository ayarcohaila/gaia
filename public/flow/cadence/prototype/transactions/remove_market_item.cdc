import AssetsMarket from "../../contracts/AssetsMarket.cdc"

transaction(saleItemID: UInt64) {
    let marketCollection: &AssetsMarket.Collection

    prepare(signer: AuthAccount) {
        self.marketCollection = signer.borrow<&AssetsMarket.Collection>(from: AssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed AssetsMarket Collection")
    }

    execute {
        let offer <-self.marketCollection.remove(saleItemID: saleItemID)
        destroy offer
    }
}