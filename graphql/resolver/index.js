const userResolvers = require("./users")
const postResolvers = require("./posts")
const commentResolvers = require("./comments")


module.exports = {
    Query:{
        ...userResolvers.Query,
        ...postResolvers.Query,
        ...commentResolvers.Query
    },
    Mutation:{
        ...postResolvers.Mutation,
        ...userResolvers.Mutation
    }
}