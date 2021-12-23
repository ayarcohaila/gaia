import NFTStorefront from 0xStorefrontContract
import Gaia from 0xGaiaContract
transaction(assetID: UInt64) {
    let storefront: &NFTStorefront.Storefront
    prepare(acct: AuthAccount) {
        self.storefront = acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath)
            ?? panic("Missing or mis-typed NFTStorefront Storefront")
    }
    execute {
        let existingOffers = self.storefront.getListingIDs()
        if existingOffers.length > 0 {
            for listingResourceID in existingOffers {
                let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}? = self.storefront.borrowListing(listingResourceID: listingResourceID)
                if listing != nil && listing!.getDetails().nftID == assetID {
                    self.storefront.removeListing(listingResourceID: listingResourceID)
                }
            }
        }
    }
}
