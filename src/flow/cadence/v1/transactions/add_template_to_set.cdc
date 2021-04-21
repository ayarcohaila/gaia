import FlowAssets from 0xNFTContract

// This transaction is how a Top Shot admin adds a created play to a set

// Parameters
//
// setID: the ID of the set to which a created play is added
// playID: the ID of the play being added

transaction(setID: UInt32, templateID: UInt32) {

    prepare(acct: AuthAccount) {

        // borrow a reference to the Admin resource in storage
        let admin = acct.borrow<&FlowAssets.Admin>(from: /storage/FlowAssetsAdmin)
            ?? panic("Could not borrow a reference to the Admin resource")
        
        // Borrow a reference to the set to be added to
        let setRef = admin.borrowSet(setID: setID)

        // Add the specified play ID
        setRef.addTemplate(templateID: templateID)
    }
}