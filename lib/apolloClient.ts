import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // ensure you have this environment variable set
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: ["id"],
      },
    },
  }),
});

export default client;
