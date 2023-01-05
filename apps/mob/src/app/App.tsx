/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HomeScreen } from './HomeScreen';
// TODO: Apollo Client should be in todo-feature-lib
import {NX_API_URL} from '@env';
const client = new ApolloClient({
  uri: NX_API_URL,
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
};


export default App;
