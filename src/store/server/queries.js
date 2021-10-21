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

const GET_BALLERZ_NFTS_FOR_SALE = gql`
  query nft_sale_offer(
    $id: uuid!
    $limit: Int!
    $offset: Int!
    $mintSort: order_by = null
    $priceSort: order_by = null
  ) {
    nft_sale_offer(
      where: { nft: { collection_id: { _eq: $id } } }
      limit: $limit
      offset: $offset
      order_by: { nft: { asset_id: $mintSort }, price: $priceSort }
    ) {
      id
      price
      nft {
        asset_id
        owner
        nft_template {
          id
          metadata
        }
      }
    }
  }
`;

const GET_BALLERZ_NFTS_FOR_SALE_COUNT = gql`
  query nft_sale_offer_aggregate {
    nft_sale_offer_aggregate {
      aggregate {
        count(distinct: true, columns: id)
      }
    }
  }
`;

export { GET_COLLECTION_BY_ID, GET_BALLERZ_NFTS_FOR_SALE, GET_BALLERZ_NFTS_FOR_SALE_COUNT };
