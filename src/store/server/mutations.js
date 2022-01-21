import gql from 'graphql-tag';

const ADD_FAVORITE = gql`
  mutation addFavorite($nftId: uuid, $address: String) {
    insert_nft_favorites(objects: { nft_id: $nftId, wallet_address: $address }) {
      returning {
        id
        nft_id
        wallet_address
      }
    }
  }
`;

const REMOVE_FAVORITE = gql`
  mutation removeFavorite($id: uuid) {
    delete_nft_favorites(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export { ADD_FAVORITE, REMOVE_FAVORITE };
