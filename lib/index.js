const { createYoga } = require('graphql-yoga')

const { generateSchema4 } = require('./schema')
const { fieldResolver } = require('./resolvers')

function GraphQLAdapter(services, options) {
  const schema = generateSchema4(services)
  return createYoga({ schema, ...options })
}

module.exports = GraphQLAdapter
