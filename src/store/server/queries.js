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

const GET_BALLERZ_NFT_BY_ID = gql`
  query getBallerzNftById($id: jsonb) {
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

const GET_NFTS = gql`
  query getNFTs {
    nft {
      asset_id
      owner
      id
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
            }
          }
        }
      }
    `
  : gql`
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

export {
  GET_NFTS,
  GET_BALLERZ_NFT_BY_ID,
  GET_COLLECTION_BY_ID,
  GET_NFTS_BY_ADDRESS,
  GET_BALLERZ_NFTS_FOR_SALE
};
