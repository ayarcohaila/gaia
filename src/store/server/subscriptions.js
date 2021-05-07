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

export const GET_NFTS_BY_TEMPLATE_ID = gql`
  subscription nft($id: bigint!) {
    nft(where: { template: { template_id: { _eq: $id } } }) {
      data
      id
      template {
        collection_id
      }
    }
  }
`;

export const GET_COLLECTIONS = gql`
  subscription nft_collection {
    nft_collection {
      collection_id
      name
      templates {
        metadata
      }
    }
  }
`;

export const GET_TEMPLATES = gql`
  subscription nft_template($id: bigint!) {
    nft_template(where: { collection: { collection_id: { _eq: $id } } }) {
      metadata
      template_id
      collection {
        collection_id
      }
    }
  }
`;
