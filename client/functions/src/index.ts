import * as functions from 'firebase-functions';
import createApolloServer from './graphql'

export const api = functions.https.onRequest(createApolloServer())
