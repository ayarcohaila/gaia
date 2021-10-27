import gql from 'graphql-tag';

const SHOULD_HIDE_DATA = process.env.NEXT_PUBLIC_MYSTERY_IMAGE === 'true';

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

const GET_NFTS_BY_ADDRESS = SHOULD_HIDE_DATA
  ? gql`
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
          sale_offers {
            listing_resource_id
            price
            status
          }
        }
      }
    `
  : gql`
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

const GET_BALLERZ_NFTS_FOR_SALE = SHOULD_HIDE_DATA
  ? gql`
      query nft_sale_offer(
        $id: uuid!
        $limit: Int!
        $offset: Int!
        $mintSort: order_by = null
        $priceSort: order_by = null
      ) {
        nft_sale_offer(
          where: {
            nft: { collection_id: { _eq: $id }, is_for_sale: { _eq: true } }
            status: { _eq: "active" }
          }
          limit: $limit
          offset: $offset
          order_by: { nft: { asset_id: $mintSort }, price: $priceSort }
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
            }
          }
        }
      }
    `
  : gql`
      query nft_sale_offer(
        $id: uuid!
        $limit: Int!
        $offset: Int!
        $mintSort: order_by = null
        $priceSort: order_by = null
      ) {
        nft_sale_offer(
          where: {
            nft: { collection_id: { _eq: $id }, is_for_sale: { _eq: true } }
            status: { _eq: "active" }
          }
          limit: $limit
          offset: $offset
          order_by: { nft: { asset_id: $mintSort }, price: $priceSort }
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

const GET_BALLERZ_NFTS_FOR_SALE_COUNT = gql`
  query nft_sale_offer_aggregate($id: uuid!) {
    nft_sale_offer_aggregate(
      where: {
        nft: { collection_id: { _eq: $id }, is_for_sale: { _eq: true } }
        status: { _eq: "active" }
      }
    ) {
      aggregate {
        count(distinct: true, columns: id)
      }
    }
  }
`;

export {
  GET_COLLECTION_BY_ID,
  GET_NFTS_BY_ADDRESS,
  GET_BALLERZ_NFTS_FOR_SALE,
  GET_BALLERZ_NFTS_FOR_SALE_COUNT
};
