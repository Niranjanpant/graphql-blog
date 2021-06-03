const{gql} = require("apollo-server")

module.exports = gql`

type Query {
    getUsers:[User!]!
    getPosts:[Post!]!
    getComments:[Comment!]!
}

type User {
    id:ID!
    name:String!
    email:String!
    age:String
}

type Post{
    id:ID!
    title:String!
    body:String!
    published:String!

}

type Comment{
    id:ID!
    text:String!
}


`;