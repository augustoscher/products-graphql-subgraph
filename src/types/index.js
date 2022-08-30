const { gql } = require('apollo-server')

const schema = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Query {
    orders: [Order]
    order(id: ID!): Order
  }

  type Mutation {
    createOrder(order: OrderInput): Order
  }

  type User @key(fields: "id") {
    id: ID!
    totalOrdersCreated: Int @shareable
  }

  type Order @key(fields: "id") {
    id: ID!
    customerId: ID!
    storeName: String
    total: Float!
    items: [OrderItem]
  }

  type OrderItem {
    id: ID!
    productId: ID!
    amount: Float!
    price: Float!
    total: Float!
  }

  input OrderInput {
    customerId: ID!
    storeName: String
    total: Float!
    items: [OrderItemInput]
  }

  input OrderItemInput {
    productId: ID!
    amount: Float!
    price: Float!
    total: Float!
  }
`

module.exports = schema
