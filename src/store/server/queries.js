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
  query getNftById($id: jsonb, $collection_id: uuid!) {
    nft(
      where: { collection_id: { _eq: $collection_id }, template: { metadata: { _contains: $id } } }
    ) {
      id
      asset_id
      is_for_sale
      collection_id
      created_at
      updated_at
      minted_at
      mint_number
      has_sale_offers
      transaction_status
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
        updated_at
      }
    }
  }
`;

const GET_NFT_BY_MINT_NUMBER = gql`
  query getNftByMintNumber($filter: nft_bool_exp) {
    nft(where: $filter) {
      id
      asset_id
      mint_number
      owner
      is_for_sale
      created_at
      updated_at
      minted_at
      collection_id
      transaction_status
      has_sale_offers
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
        updated_at
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
  query getMetadataIDs($collections: [nft_template_bool_exp!]) {
    nft_template(where: { _or: $collections }) {
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
  query getNFTsByAddress($address: String!, $collections: [nft_bool_exp!]) {
    nft(where: { _or: $collections, owner: { _eq: $address } }) {
      id
      asset_id
      mint_number
      is_for_sale
      has_sale_offers
      collection_id
      transaction_status
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
        updated_at
      }
    }
  }
`;

const GET_NFTS_FOR_SALE = gql`
  query nft_sale_offer($id: uuid!, $address: String!) {
    nft_sale_offer(
      where: {
        nft: {
          collection_id: { _eq: $id }
          has_sale_offers: { _eq: true }
          transaction_status: { _eq: false }
          owner: { _eq: $address }
        }
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
        has_sale_offers
        owner
        collection_id
        mint_number
        transaction_status
        template {
          id
          metadata
          template_id
        }
      }
    }
  }
`;

const GET_SINGLE_NFTS_FOR_SALE = gql`
  query getSingleNFTsForSal($id: uuid!, $address: String!) {
    nft_sale_offer(
      where: {
        status: { _eq: "active" }
        nft: {
          collection_id: { _eq: $id }
          has_sale_offers: { _eq: true }
          transaction_status: { _eq: false }
          owner: { _eq: $address }
        }
      }
    ) {
      listing_resource_id
      nft {
        asset_id
        mint_number
        is_for_sale
        has_sale_offers
        collection_id
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

const GET_MARKETPLACE_OFFERS = gql`
  query nfts_marketplace(
    $has_sale_offers: Boolean_comparison_exp
    $price: [nft_bool_exp!]
    $collections: [nft_bool_exp!]
    $properties: [nft_template_bool_exp!]
    $offset: Int
    $orderBy: [nft_order_by!]
    $marketPlaceAddress: String
    $limit: Int
  ) @cached(ttl: 120) {
    nft_aggregate(
      where: {
        _not: { owner: { _eq: $marketPlaceAddress } }
        _or: $collections
        has_sale_offers: $has_sale_offers
        template: { _and: $properties }
        _and: $price
      }
    ) {
      aggregate {
        count
      }
    }
    nft(
      where: {
        _not: { owner: { _eq: $marketPlaceAddress } }
        _or: $collections
        has_sale_offers: $has_sale_offers
        template: { _and: $properties }
        _and: $price
      }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      id
      asset_id
      mint_number
      owner
      has_sale_offers
      is_for_sale
      collection_id
      template {
        metadata
      }
      sale_offers {
        updated_at
        listing_resource_id
        price
        parsed_price
        status
      }
    }
  }
`;

const GET_MARKETPLACE_NFTS_COUNT = gql`
  query getMarketplaceNFTsCount(
    $has_sale_offers: Boolean_comparison_exp
    $price: [nft_sale_offer_bool_exp!]
    $collections: [nft_bool_exp!]
    $properties: [nft_template_bool_exp!]
    $marketPlaceAddress: String
  ) {
    nft_sale_offer_aggregate(
      where: {
        _and: $price
        nft: {
          _not: { owner: { _eq: $marketPlaceAddress } }
          _or: $collections
          has_sale_offers: $has_sale_offers
          template: { _and: $properties }
        }
      }
    ) {
      aggregate {
        count
      }
      nodes {
        nft {
          asset_id
        }
      }
    }
  }
`;

const GET_COLLECTION_FLOOR_VALUE_BY_ID = gql`
  query getCollectionFloorValueById($collection_id: uuid!, $marketPlaceAddress: String) {
    nft_sale_offer(
      limit: 1
      where: {
        nft: {
          collection_id: { _eq: $collection_id }
          _not: { owner: { _eq: $marketPlaceAddress } }
        }
        status: { _eq: "active" }
      }
      order_by: { parsed_price: asc }
    ) {
      parsed_price
    }
  }
`;

const CHECK_FAVORITE_NFT = gql`
  query checkFavoriteNft($nftId: uuid!, $address: String) {
    nft_favorites(where: { nft_id: { _eq: $nftId }, wallet_address: { _eq: $address } }) {
      id
    }
  }
`;

const GET_FAVORITE_LIST = gql`
  query getFavoriteList($address: String) {
    nft_favorites(where: { wallet_address: { _eq: $address } }) {
      nft {
        id
        asset_id
        mint_number
        is_for_sale
        has_sale_offers
        collection_id
        transaction_status
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
          updated_at
        }
      }
    }
  }
`;

const GET_LOWER_NFT_PRICE_BY_COLLECTIONS = gql`
  query getLowerNftPriceByCollection($collection_ids: [uuid]) {
    nft_collection(where: { id: { _in: $collection_ids } }) {
      id
      nfts(limit: 1, order_by: { last_active_price: asc }) {
        last_active_price
      }
    }
  }
`;

const GET_LOWER_NFT_PRICE_BY_COLLECTION = gql`
  query getLowerNftPriceByCollection($collection_id: uuid) {
    nft(
      where: { template: { collection: { id: { _eq: $collection_id } } } }
      order_by: { last_active_price: asc }
      limit: 1
    ) {
      id
      template {
        collection {
          description
          image
          name
          collection_id
          id
        }
      }
      last_active_price
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
  GET_MARKETPLACE_NFTS_COUNT,
  GET_MARKETPLACE_OFFERS,
  GET_COLLECTION_FLOOR_VALUE_BY_ID,
  CHECK_FAVORITE_NFT,
  GET_FAVORITE_LIST,
  GET_LOWER_NFT_PRICE_BY_COLLECTION,
  GET_LOWER_NFT_PRICE_BY_COLLECTIONS
};
