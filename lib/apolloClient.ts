// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

// WARNING: Disabling key fields and merge functions for the User type bypasses
// Apollo's cache normalization and merging safeguards. Use only in a demo environment.
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql", // fallback endpoint for demo
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        // Disable automatic merging of User objects by turning off key fields.
        keyFields: false,
        // Always return incoming data so that missing IDs do not cause issues.
        merge(existing, incoming) {
          return incoming;
        },
      },
    },
  }),
});

export default client;
