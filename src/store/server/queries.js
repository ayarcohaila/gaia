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

const GET_NFL_EDITION_BY_ID = gql`
  query getNflEditionById($_eq: bigint!) {
    nfl_all_day_moments_aggregate(where: { edition_id: { _eq: $_eq } }) {
      aggregate {
        count
      }
    }
    nfl_all_day_editions(where: { edition_id: { _eq: $_eq } }) {
      edition_id
      max_mint_size
      inserted_at
      play {
        player_full_name
        team_name
        game_date
        play_type
        player_position
        description
        classification
        away_team_name
        away_team_score
        home_team_name
        home_team_score
        external_id
      }
      series {
        name
        series_id
      }
      set {
        name
        set_id
      }
      number_of_active_listings
      unavailable_count
      hidden_in_packs_count
      circulation_count
      tier
    }
  }
`;

const GET_MOMENTS_BY_EDITION_ID = gql`
  query getMomentsByEditionId($_eq: bigint!, $offset: Int!, $limit: Int!) {
    nfl_all_day_moments(
      where: { active_listing_price: { _is_null: false }, edition_id: { _eq: $_eq } }
      limit: $limit
      offset: $offset
    ) {
      transaction_index
      serial_number
      owner
      moment_id
      inserted_at
      event_index
      edition_id
      created_at
      burned_at
      block_height
      active_listing_vault_type
      active_listing_transaction_index
      active_listing_price
      active_listing_order_id
      active_listing_order_address
      active_listing_event_index
      active_listing_date
      active_listing_block_height
      acquired_at
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
      limit: 40
      offset: $offset
    ) {
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

const GET_LOWER_NFT_PRICE_BY_COLLECTION = gql`
  query getLowerNftPriceByCollection($collection_id: uuid) {
    nft(where: { template: { collection: { id: { _eq: $collection_id } } } }) {
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
      sale_offers(order_by: { price: asc }) {
        id
        price
      }
    }
  }
`;

const GET_NFL_FILTERS = gql`
  query getNflFilters {
    nfl_all_day_taxonomies {
      moment_count
      taxonomy_attribute
      taxonomy_label
      taxonomy_value
    }
  }
`;

const GET_NFL = gql`
  query getNFlEditions(
    $offset: Int
    $plays: nfl_all_day_plays_bool_exp
    $sets: nfl_all_day_sets_bool_exp
    $tier: [nfl_all_day_editions_bool_exp!]
    $orderBy: [nfl_all_day_editions_order_by!]
    $limit: Int
  ) {
    nfl_all_day_editions_aggregate(
      where: {
        _and: [{ number_of_active_listings: { _gt: 0 } }, { _or: $tier, play: $plays, set: $sets }]
      }
    ) {
      aggregate {
        count
      }
    }
    nfl_all_day_editions(
      where: {
        _and: [{ number_of_active_listings: { _gt: 0 } }, { _or: $tier, play: $plays, set: $sets }]
      }
      limit: $limit
      offset: $offset
      order_by: $orderBy
    ) {
      edition_id
      max_list_price
      min_list_price
      max_mint_size
      inserted_at
      number_of_active_listings
      circulation_count
      tier
      play {
        player_full_name
        description
        external_id
        team_name
        game_date
        play_type
        player_position
      }
      series {
        name
        series_id
      }
      set {
        name
        set_id
      }
    }
  }
`;

const GET_NFL_NFTS_BY_ADDRESS = gql`
  query getNFLNFTsByAddress($address: String!, $collections: [nft_bool_exp!]) {
    nft: nfl_all_day_moments_aggregate(where: { owner: { _eq: $address } }) {
      nfl: nodes {
        id: moment_id
        asset_id: moment_id
        serial_number
        active_listing_price
        active_listing_order_id
        created_at
        owner
        edition {
          edition_id
          max_mint_size
          min_list_price
          max_list_price
          number_of_active_listings
          tier
          play {
            team_name
            play_id
            description
            classification
            created_at
            play_type
            external_id
            game_date
            player_full_name
            player_position
          }
          series {
            name
            series_id
          }
          set {
            name
            set_id
          }
        }
      }
    }
  }
`;

export {
  GET_NFL_EDITION_BY_ID,
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
  GET_NFL,
  GET_NFL_FILTERS,
  GET_MOMENTS_BY_EDITION_ID,
  GET_NFL_NFTS_BY_ADDRESS
};
