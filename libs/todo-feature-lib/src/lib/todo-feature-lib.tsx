import { ApolloClient, InMemoryCache } from '@apollo/client';
export const apolloClient = new ApolloClient({
  uri: process.env.NX_API_URL,
  cache: new InMemoryCache(),
});