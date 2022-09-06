const products = []

const productResolvers = {
  Query: {
    allProducts: () => {
      return products
    },
    product: (_, args) => {
      return products.find((p) => p.id == args.id)
    }
  },
  ProductItf: {
    __resolveType() {
      return 'Product'
    }
  },
  Product: {
    variation: (reference) => {
      const { id, variation } = reference

      if (variation) return { id: variation }

      return { id: products.find((p) => p.id == id).variation }
    },
    dimensions: () => {
      return { size: '1', weight: 1 }
    },
    createdBy: () => {
      return { email: 'augusto@test.com', totalProductsCreated: 1337 }
    },
    reviewsScore: () => {
      return 4.5
    },
    __resolveReference: (reference) => {
      const { id, sku, name } = reference

      if (id) return products.find((p) => p.id == id)
      else if (sku && name)
        return products.find((p) => p.sku == sku && p.name == name)
      else return { id: 'rover', name: 'my products', ...reference }
    }
  }
}

module.exports = productResolvers
