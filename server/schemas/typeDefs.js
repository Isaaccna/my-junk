// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    products: [Product]
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }
  # type Image {
    # _id: ID
    # name : String!
    #
  # }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
      user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    products(username: String): [Product]
    product(_id: ID!): Product
  }
  # add image to addProduct mutation
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(name: String!, description: String!, price: String!, image: String): Product
    addComment(productId: ID!, commentBody: String!): Product
  }
`;
module.exports = typeDefs;

