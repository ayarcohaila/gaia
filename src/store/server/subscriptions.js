import gql from 'graphql-tag';

export const GET_DROP_BY_ID = gql`
  subscription nft_drops($id: uuid!) {
    nft_drops(where: { id: { _eq: $id } }) {
      id
      name
      price
      claimed
      total_claimable
      end_time
      template {
        metadata
      }
    }
  }
`;

export const GET_NFTS_ON_SALE = gql`
  subscription nft_sale_offer {
    nft_sale_offer {
      price
      nft {
        id
        created_at
        template {
          metadata
        }
      }
    }
  }
`;

export const GET_NFT = gql`
  subscription nft($id: uuid!) {
    nft(where: { id: { _eq: $id } }) {
      id
      is_for_sale
      owner
      template {
        metadata
      }
      sale_offers {
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

export const GET_MY_NFTS_BY_OWNER = gql`
  subscription nft($id: String!) {
    nft(where: { owner: { _eq: $id } }) {
      id
      is_for_sale
      owner
      template {
        metadata
      }
      sale_offers {
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
