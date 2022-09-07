const { ApolloServer } = require('apollo-server')
const { buildSubgraphSchema } = require('@apollo/subgraph')

const typeDefs = require('./types')
const resolvers = require('./resolvers')

const port = process.env.PORT || 4002

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
})

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Products subgraph ready at ${url}`)
  })
  .catch((err) => {
    console.error(err)
  })
