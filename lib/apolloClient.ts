import { ApolloClient, InMemoryCache } from "@apollo/client";

// DEMO MODE ONLY: Turn off normalization, allow duplicates, ignore ID warnings
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          user: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      User: {
        keyFields: false, // Don't expect an ID
        merge(existing, incoming) {
          return incoming; // Always replace, never merge
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    mutate: {
      errorPolicy: 'ignore',
    },
  },
});

export default client;
