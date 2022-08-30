const { gql } = require('apollo-server')

const schema = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable", "@tag", "@inaccessible"]
    )

  type Query {
    products: [ProductItf]
    product(id: ID!): ProductItf
  }

  interface ProductItf implements SkuItf {
    id: ID!
    sku: String
    name: String
    variation: ProductVariation
    dimensions: ProductDimension
    createdBy: User
    hidden: String @inaccessible
  }

  interface SkuItf {
    sku: String
  }

  type Product implements ProductItf & SkuItf
    @key(fields: "id")
    @key(fields: "sku name")
    @key(fields: "sku variation { id }") {
    id: ID! @tag(name: "hi-from-products")
    sku: String
    name: String
    variation: ProductVariation
    dimensions: ProductDimension
    createdBy: User
    hidden: String
    reviewsScore: Float!
  }

  enum ShippingClass {
    STANDARD
    EXPRESS
  }

  type ProductVariation {
    id: ID!
  }

  type ProductDimension @shareable {
    size: String
    weight: Float
  }

  type User @key(fields: "email") {
    email: ID!
    totalProductsCreated: Int @shareable
  }
`

module.exports = schema
