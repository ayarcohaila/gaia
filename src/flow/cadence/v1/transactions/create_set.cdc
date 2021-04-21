import FlowAssets from 0xNFTContract

// This transaction is for the admin to create a new set resource
// and store it in the top shot smart contract

// Parameters
//
// setName: the name of a new Set to be created

transaction(setName: String) {
    prepare(acct: AuthAccount) {
        // borrow a reference to the Admin resource in storage
        let admin = acct.borrow<&FlowAssets.Admin>(from: /storage/FlowAssetsAdmin)
            ?? panic("Could not borrow a reference to the Admin resource")

        // Create a set with the specified name
        admin.createSet(name: setName)
    }
}