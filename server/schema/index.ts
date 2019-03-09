import * as graphql from 'graphql'

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = graphql

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    author: {type: GraphQLString}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve() {
        return {
          id: '1',
          title: 'Hello',
          author: 'Casper'
        }
      }
    }
  }
})

export default new GraphQLSchema({query: RootQuery})
