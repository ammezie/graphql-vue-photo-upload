const { ApolloServer } = require('apollo-server')
require('dotenv').config()
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
