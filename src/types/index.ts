import { gql } from 'apollo-server'

export const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Query {
    products: [Product]
    product(id: ID!): Product

    categories: [Category]
    category(id: ID!): Category
  }

  type Mutation {
    createProduct(product: ProductInput): Product
    createCategory(category: CategoryInput): Category
  }

  type Product @key(fields: "id") {
    id: ID!
    title: String!
    description: String
    price: Float!
    category: Category!
  }

  type Category {
    id: ID!
    title: String!
  }

  input ProductInput {
    title: String!
    description: String
    price: Float!
    categoryId: ID!
  }

  input CategoryInput {
    title: String!
  }
`
