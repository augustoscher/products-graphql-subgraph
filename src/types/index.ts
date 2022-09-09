import { gql } from 'apollo-server'

export default gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable", "@tag", "@inaccessible"]
    )

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(product: ProductInput): Product
  }

  type Product @key(fields: "id") {
    id: ID!
    sku: String
    name: String
    hidden: String
    reviewsScore: Float!
  }

  input ProductInput {
    sku: String!
    name: String!
    createdBy: String!
    hidden: String
    reviewsScore: Float
  }
`
