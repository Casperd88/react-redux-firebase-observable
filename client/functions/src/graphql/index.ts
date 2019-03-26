import express from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";

const createApolloServer = function() {
  const app = express();

  app.use(cors());

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => "Hello from Apollo"
    }
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  return app;
};

export default createApolloServer;
