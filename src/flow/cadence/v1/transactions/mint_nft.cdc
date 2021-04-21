import FlowAssets from 0xNFTContract

// This transaction is what an admin would use to mint a single new moment
// and deposit it in a user's collection

// Parameters
//
// setID: the ID of a set containing the target play
// playID: the ID of a play from which a new moment is minted
// recipientAddr: the Flow address of the account receiving the newly minted moment

transaction(setID: UInt32, templateID: UInt32, recipientAddr: Address) {
    // local variable for the admin reference
    let adminRef: &FlowAssets.Admin

    prepare(acct: AuthAccount) {
        // borrow a reference to the Admin resource in storage
        self.adminRef = acct.borrow<&FlowAssets.Admin>(from: /storage/FlowAssetsAdmin)!
    }

    execute {
        // Borrow a reference to the specified set
        let setRef = self.adminRef.borrowSet(setID: setID)

        // Mint a new NFT
        let nft1 <- setRef.mintNFT(templateID: templateID)

        // get the public account object for the recipient
        let recipient = getAccount(recipientAddr)

        // get the Collection reference for the receiver
        let receiverRef = recipient.getCapability(FlowAssets.CollectionPublicPath).borrow<&{FlowAssets.FlowAssetsCollectionPublic}>()
            ?? panic("Cannot borrow a reference to the recipient's moment collection")

        // deposit the NFT in the receivers collection
        receiverRef.deposit(token: <-nft1)
    }
}