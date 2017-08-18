import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8000'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}
