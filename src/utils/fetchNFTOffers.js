const fcl = require('@onflow/fcl');

const ACCESS_NODE = process.env.NEXT_PUBLIC_ACCESS_NODE;
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const NFT_STOREFRONT = process.env.NEXT_PUBLIC_STOREFRONT_CONTRACT;

const tx = `
import NFTStorefront from 0xStorefrontContract

pub fun main(account: Address, assetID: UInt64): [&NFTStorefront.Listing{NFTStorefront.ListingPublic}?] {
    let accountRef = getAccount(account)

    let storefrontRef = accountRef
        .getCapability<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(
            NFTStorefront.StorefrontPublicPath
        )
        .borrow()
        ?? panic("Could not borrow public storefront from address")
    
    let existingOffers = storefrontRef.getListingIDs()
    let offers: [&NFTStorefront.Listing{NFTStorefront.ListingPublic}?] = []
    if existingOffers.length > 0 {
        for listingResourceID in existingOffers {
            let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}? = storefrontRef.borrowListing(listingResourceID: listingResourceID)
            if listing != nil && listing!.getDetails().nftID == assetID {
                offers.append(listing)
            }
        }
    }
    
    return offers
}
`;

fcl
  .config()
  .put('accessNode.api', ACCESS_NODE)
  .put('grpc.metadata', { api_key: ALCHEMY_API_KEY })
  .put('0xStorefrontContract', NFT_STOREFRONT);

const listNFTOffers = async (wallet, assetID) => {
  if (wallet && wallet.match(/^0x[0-9a-fA-F]{16}$/) && assetID && assetID.match(/^[\d]+$/)) {
    return fcl.query({
      cadence: tx,
      args: (arg, t) => [arg(wallet, t.Address), arg(parseInt(assetID), t.UInt64)]
    });
  } else {
    throw new Error('Invalid wallet or asset ID');
  }
};

export default listNFTOffers;
