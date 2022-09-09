export default {
  Product: {
    __resolveReference: (product) => {
      console.log(product)
    }
  },
  Query: {
    products: () => {
      return []
    },
    product: (_, args) => {
      console.log(_)
      console.log(args)
      return {}
    }
  },
  Mutation: {
    createProduct: (_, { product }) => {
      console.log(product)
    }
  }
}
