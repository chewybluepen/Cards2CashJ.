import { ApolloClient, InMemoryCache } from "@apollo/client";

// DEMO MODE ONLY: Completely disable cache normalization and error reporting.
// This configuration forces Apollo to never try to merge objects based on IDs.

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    // Disable caching for User objects and for the Query field "user".
    typePolicies: {
      Query: {
        fields: {
          user: {
            // Always replace the "user" data with the incoming data and ignore existing data.
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      User: {
        // Do not expect any ID (i.e. keyFields are false)
        keyFields: false,
        // Always override existing User data with incoming data.
        merge(existing, incoming) {
          return incoming;
        },
      },
    },
  }),
  defaultOptions: {
    // Disable caching and ignore errors for queries and mutations.
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    mutate: {
      errorPolicy: "ignore",
    },
  },
});

export default client;
