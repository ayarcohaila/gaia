import Gaia from 0xGaiaContract
import NonFungibleToken from 0xNFTInterface
import NFTStorefront from 0xStorefrontContract
transaction(recipient: Address, assetID: UInt64, listingResourceID: UInt64) {
    prepare(signerAcct: AuthAccount) {
        
        // get the recipients public account object
        let recipientAcct = getAccount(recipient)
        // borrow a reference to the signer's NFT collection
        let signerCollectionRef = signerAcct.borrow<&Gaia.Collection>(from: Gaia.CollectionStoragePath)
            ?? panic("Could not borrow a reference to the owner's collection")
        // delist from the signer's NFTStoreFront if the listing exists
        if let storeFrontRef = signerAcct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) {
            if storeFrontRef.borrowListing(listingResourceID: listingResourceID) != nil {
                storeFrontRef.removeListing(listingResourceID: listingResourceID)
            }
        }
        // borrow a public reference to the receivers collection
        let depositRef = recipientAcct.getCapability(Gaia.CollectionPublicPath)
              .borrow<&{Gaia.CollectionPublic}>()!  
        // withdraw the NFT from the owner's collection
        let nft <- signerCollectionRef.withdraw(withdrawID: assetID)
        // Deposit the NFT in the recipient's collection
        depositRef.deposit(token: <-nft)
    }
}