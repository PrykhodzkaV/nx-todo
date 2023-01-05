/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {ApolloProvider } from '@apollo/client';
import { HomeScreen } from './HomeScreen';
import {apolloClient} from '@nx-todo/todo-feature-lib';
const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HomeScreen />
    </ApolloProvider>
  );
};


export default App;
