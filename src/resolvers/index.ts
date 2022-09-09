const products = [
  {
    id: '1',
    title: 'Blender',
    description: null,
    price: 40,
    categoryId: '1'
  }
]

const categories = [
  {
    id: '1',
    title: 'Kitchen tools'
  }
]

export const resolvers = {
  Product: {
    category(product) {
      console.log(
        `resolving product category for product '${JSON.stringify(product)}'`
      )
      return categories.find((category) => category.id === product.categoryId)
    },
    __resolveReference: (product) => {
      console.log(`resolving product reference '${JSON.stringify(product)}'`)
      return products.find((prod) => prod.id === product.id)
    }
  },
  Query: {
    product: (_, { id }) => {
      console.log(`resolving product by id '${id}'`)
      return products.find((product) => product.id === id)
    },
    products: () => {
      console.log(`resolving products`)
      return products
    }
  },
  Mutation: {
    createProduct: (_, { product }) => {
      products.push(product)
    },
    createCategory: (_, { category }) => {
      categories.push(category)
    }
  }
}
