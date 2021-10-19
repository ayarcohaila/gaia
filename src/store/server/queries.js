import gql from 'graphql-tag';

const GET_COLLECTION_BY_NAME = gql`
  query getCollectionByName($id: uuid!) {
    nft_collection(where: { id: { _eq: $id } }) {
      id
      image
      author
      description
      name
    }
  }
`;

export { GET_COLLECTION_BY_NAME };
