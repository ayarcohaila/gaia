import gql from 'graphql-tag';

const GET_COLLECTION_BY_ID = gql`
  query getCollectionById($id: uuid!) {
    nft_collection(where: { id: { _eq: $id } }) {
      id
      image
      author
      description
      name
    }
  }
`;

const GET_NFT_BY_ID = gql`
  query getNftById($id: jsonb) {
    nft(where: { template: { metadata: { _contains: $id } } }) {
      asset_id
      is_for_sale
      created_at
      updated_at
      collection {
        collection_id
        name
        market_fee
        image
        description
        author
      }
      owner
      template {
        metadata
      }
      sale_offers {
        listing_resource_id
        price
        status
      }
    }
  }
`;

const GET_NFT_BY_MINT_NUMBER = gql`
  query getNftByMintNumber($mint_number: bigint!, $collection_id: uuid!) {
    nft(where: { mint_number: { _eq: $mint_number }, collection_id: { _eq: $collection_id } }) {
      asset_id
      mint_number
      owner
      is_for_sale
      created_at
      updated_at
      collection {
        collection_id
        name
        market_fee
        image
        description
        author
      }
      sale_offers {
        status
        price
        listing_resource_id
      }
      template {
        metadata
      }
    }
  }
`;

const GET_NFTS = gql`
  query getNFTs {
    nft {
      asset_id
      owner
      id
    }
  }
`;

const GET_NFTS_IDS = gql`
  query getMetadataIDs {
    nft_template {
      id: metadata(path: "$.id")
    }
  }
`;

const GET_NFTS_MINT_NUMBER = gql`
  query getNFTsMintNumber($collection_id: uuid!) {
    nft_collection(where: { id: { _eq: $collection_id } }) {
      nfts(order_by: { mint_number: asc }) {
        mint_number
      }
    }
  }
`;

const GET_NFTS_BY_ADDRESS = gql`
  query getNFTsByAddress($address: String!) {
    nft(where: { owner: { _eq: $address } }) {
      asset_id
      is_for_sale
      collection {
        collection_id
        name
        market_fee
        image
        description
        author
      }
      owner
      template {
        metadata
      }
      sale_offers {
        listing_resource_id
        price
        status
      }
    }
  }
`;

const GET_NFTS_FOR_SALE = gql`
  query nft_sale_offer($id: uuid!) {
    nft_sale_offer(
      where: {
        nft: { collection_id: { _eq: $id }, is_for_sale: { _eq: true } }
        status: { _eq: "active" }
      }
    ) {
      id
      listing_resource_id
      price
      status
      nft {
        asset_id
        is_for_sale
        owner
        template {
          id
          metadata
        }
      }
    }
  }
`;

const GET_SINGLE_NFTS_FOR_SALE = gql`
  query getSingleNFTsForSal($id: uuid!) {
    nft_sale_offer(where: { status: { _eq: "active" }, nft: { collection_id: { _eq: $id } } }) {
      listing_resource_id
      nft {
        asset_id
        mint_number
        is_for_sale
        owner
        template {
          metadata
        }
      }
      price
      status
    }
  }
`;

const GET_MARKETPLACE_NFTS = gql`
  query getMarketplaceNFTs(
    $isForSale: Boolean_comparison_exp
    $price: [nft_bool_exp!]
    $collections: [nft_bool_exp!]
    $properties: [nft_template_bool_exp!]
    $orderUpdate: order_by
  ) {
    nft(
      where: {
        _or: $collections
        _and: $price
        is_for_sale: $isForSale
        template: { _or: $properties }
      }
      order_by: { updated_at: $orderUpdate }
    ) {
      asset_id
      mint_number
      owner
      is_for_sale
      collection_id
      template {
        metadata
      }
      sale_offers {
        listing_resource_id
        price
        status
      }
    }
  }
`;

export {
  GET_NFTS,
  GET_NFTS_IDS,
  GET_NFTS_MINT_NUMBER,
  GET_NFT_BY_ID,
  GET_NFT_BY_MINT_NUMBER,
  GET_COLLECTION_BY_ID,
  GET_NFTS_BY_ADDRESS,
  GET_NFTS_FOR_SALE,
  GET_SINGLE_NFTS_FOR_SALE,
  GET_MARKETPLACE_NFTS
};
