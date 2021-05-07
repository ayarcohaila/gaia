import gql from 'graphql-tag';

export const CREATE_TEMPLATE = gql`
  mutation createTemplate($metadata: json!, $id: bigint!) {
    createTemplate(arg1: { metadata: $metadata, setID: $id }) {
      errors
    }
  }
`;

export const MINT = gql`
  mutation mint($recipient: String!, $setID: bigint!, $templateID: bigint!) {
    mint(arg1: { recipientAddr: $recipient, setID: $setID, templateID: $templateID }) {
      errors
    }
  }
`;

export const CREATE_SET = gql`
  mutation createSet($creator: String!, $marketFee: float8!, $name: String!) {
    createSet(arg1: { creator: $creator, marketFee: $marketFee, name: $name }) {
      errors
    }
  }
`;
