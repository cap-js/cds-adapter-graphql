const { createYoga } = require('graphql-yoga')

const { generateSchema4 } = require('./schema')

function GraphQLAdapter(services, options) {
  const schema = generateSchema4(services)
  return createYoga({ schema, ...options })
}

module.exports = GraphQLAdapter
