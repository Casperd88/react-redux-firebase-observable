import * as graphql from "graphql";

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve() {
        return {
          id: "1",
          title: "Hello",
          author: "Casper"
        };
      }
    }
  }
});

export default new GraphQLSchema({ query: RootQuery });
