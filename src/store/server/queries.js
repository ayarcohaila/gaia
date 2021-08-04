import gql from 'graphql-tag';
export const CHECK_SALE_EXISTS = gql`
  query checkSaleExists($itemID: bigint!) {
    nft_sale_offer_aggregate(where: { nft: { asset_id: { _eq: $itemID } } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_NFT = gql`
  query nft($id: uuid!) {
    nft(where: { id: { _eq: $id } }) {
      id
      is_for_sale
      owner
      asset_id
      mint_number
      collection {
        id
        name
        author
      }
      template {
        template_id
        metadata
      }
      sale_offers(where: { status: { _eq: "active" } }) {
        status
        id
        price
        nft {
          owner

          asset_id
        }
      }
    }
  }
`;
