const {ApolloServer} = require("apollo-server")
const mongoose = require("mongoose")
const {MONGODB_URL} = require("./config/config")
const typeDefs = require("./graphql/typeDefs")

const resolvers =require("./graphql/resolver/users")

const port = 3000

const server = new ApolloServer({
    typeDefs,
    resolvers
})




mongoose.connect(MONGODB_URL,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log(`connected to the databse ${mongoose.connection.host}`)
return  server.listen(port)


}).then((res) => {
console.log(`server is running on ${res.url}`)
}).


catch((e) => {
    console.log(e)
})
