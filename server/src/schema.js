const { gql } = require('apollo-server')

const typeDefs = gql`
  type Photo {
    filename: String!
    path: String!
  }

  type Query {
    allPhotos: [Photo]
  }

  type Mutation {
    uploadPhoto(photo: Upload!): Photo!
  }
`

module.exports = typeDefs
