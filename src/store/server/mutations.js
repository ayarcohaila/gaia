import gql from 'graphql-tag';

const UPDATE_TRANSACTION_STATUS = gql`
  mutation updateTransactionStatus($filters: nft_bool_exp!) {
    update_nft(where: $filters, _set: { transaction_status: true }) {
      returning {
        transaction_status
      }
    }
  }
`;

export { UPDATE_TRANSACTION_STATUS };
