import { ApolloClient, InMemoryCache } from '@apollo/client';
import {NX_API_URL} from "@env";
export const apolloClient = new ApolloClient({
  uri: NX_API_URL,
  cache: new InMemoryCache(),
});