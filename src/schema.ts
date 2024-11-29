
export const typeDefs = `#graphql
type Category {
  id:ID!
  name:String!
  products(filter:ProductsFilterInput):[Product!]!
}
type Product {
  id:ID!
  name:String!
  description:String!
  image:String!
  quantity: Int!
  price:Float!
  onSale:Boolean!
  categoryId:String!
  categories:[Category!]
  reviews:[Review!]
  
}
type Review {
    id:ID!
    date:String!
    title:String!
    comment:String!
    rating:String!
    productId:ID!
}
input ProductsFilterInput {
    onSale:Boolean
    avgRating:Int
}
input addCategoryInput {
    name:String!
}
input addProductInput {
    name:String!
}
type Mutation {
    addCategory(input:addCategoryInput):Category!
    addProduct(input:addProductInput):Product!
    
}
type Query {
  products(filter:ProductsFilterInput): [Product!]!
  product(id:ID!):Product!
  categories:[Category!]!
  category(id:ID!):Category
},

`;