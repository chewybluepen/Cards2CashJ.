// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // Ensure this environment variable is set
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        // Disable automatic merging of User objects to bypass the missing ID error
        keyFields: false,
      },
    },
  }),
});

export default client;
