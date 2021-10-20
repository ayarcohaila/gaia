import gql from 'graphql-tag';

const GET_BALLERZ_NFTS_FOR_SALE = gql`
  subscription nft_sale_offer($id: uuid!) {
    nft_sale_offer(where: { nft: { collection_id: { _eq: $id } } }) {
      id
      price
      nft {
        asset_id
        nft_template {
          id
          metadata
        }
      }
    }
  }
`;

export { GET_BALLERZ_NFTS_FOR_SALE };
