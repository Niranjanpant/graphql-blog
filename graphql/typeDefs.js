const{gql} = require("apollo-server")

module.exports = gql`

type Query {
    getUsers:[User!]!
    getPosts:[Post!]!
    getComments:[Comment!]!
}

type Mutation {
registerUser(data:RegisterUser):User!
loginUser(data:LoginUser):User!
createPosts(data:InputPostData):Post!
}

input RegisterUser {
    name:String!
    email:String!
    password:String!
    confirmPassword:String!
}

input LoginUser {
email:String!
password:String!
}

input InputPostData {
title:String!
body:String!
published:Boolean!
}

type User {
    id:ID!
    name:String!
    email:String!
    token:String!
    age:String
    createdAt:String!
}

type Post{
    id:ID!
    title:String!
    body:String!
    published:String!
    createdAt:String!

}

type Comment{
    id:ID!
    text:String!
    createdAt:String!
}


`;