import { ApolloClient, InMemoryCache, split, HttpLink, ApolloLink, concat } from '@apollo/client';
import { getMainDefinition, concatPagination } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { GraphQLClient } from 'graphql-request';
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        nft_sale_offer: concatPagination()
      }
    }
  }
});

const httpLink = new HttpLink({
  uri: process.env.API_URL
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'x-hasura-admin-secret': process.env.API_SECRET
    }
  });

  return forward(operation);
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_API_WS_URL,
      options: {
        reconnect: true,
        lazy: true,
        connectionParams: {
          headers: {
            'x-hasura-admin-secret': process.env.API_SECRET
          }
        }
      }
    })
  : null;

const link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink,
      concat(authMiddleware, httpLink)
    )
  : httpLink;

const client = new ApolloClient({
  link,
  cache
});

export const gqlClient = new GraphQLClient(process.env.API_URL);

if (process.env.API_SECRET) {
  gqlClient.setHeader('x-hasura-admin-secret', process.env.API_SECRET);
}

export default client;
