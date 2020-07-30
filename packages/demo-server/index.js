const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('demo-db');

const addRestEndpoints = require('./resolvers/rest');
const resolvers = require('./resolvers/graphql');
const requireGraphQL = require('./utilities/require-graphql-node');

const apollo = new ApolloServer({
  typeDefs: gql(requireGraphQL.require('demo-domain/desserts')),
  resolvers,
  context: async () => ({ db }),
  mock: false,
});

const app = express();
apollo.applyMiddleware({ app });
addRestEndpoints(app, db);

app.listen({ port: 4000 }, () =>
  console.log(`
  🚀 Server ready at http://localhost:4000${apollo.graphqlPath}

 `)
);
