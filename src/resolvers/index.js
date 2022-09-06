const { v4: uuidv4 } = require('uuid')

const products = []
const users = [{ email: 'augusto@test.com', totalProductsCreated: 0 }]

const productResolvers = {
  ProductItf: {
    __resolveType() {
      return 'Product'
    }
  },
  Product: {
    variation: (reference) => {
      const { id } = reference

      return { variation: products.find((p) => p.id == id).variation }
    },
    dimensions: (reference) => {
      const { id } = reference

      return { dimensions: products.find((p) => p.id == id).dimensions }
    },
    createdBy: (reference) => {
      const { user } = reference

      return users.find((u) => u.email === user.email)
    },
    reviewsScore: () => {
      return 4.5
    },
    __resolveReference: (reference) => {
      const { id, sku, name } = reference

      if (id) return products.find((p) => p.id == id)
      else if (sku && name)
        return products.find((p) => p.sku == sku && p.name == name)
      else return { id: '1', name: 'my products', ...reference }
    }
  },
  Query: {
    products: () => {
      return products
    },
    product: (_, args) => {
      return products.find((p) => p.id == args.id)
    }
  },
  Mutation: {
    createProduct: (_, { product }) => {
      const currentUser = users.find((u) => u.email === product.createdBy)
      currentUser.totalProductsCreated += 1

      users.splice(
        users.findIndex((u) => u.email === product.email),
        1,
        currentUser
      )

      const newProduct = {
        ...product,
        variation: {
          id: '1'
        },
        user: currentUser,
        id: uuidv4()
      }

      products.push(newProduct)
      return newProduct
    }
  }
}

module.exports = productResolvers
