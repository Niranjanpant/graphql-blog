const { AuthenticationError } = require("apollo-server-errors")
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config/config")

module.exports  = (context) => {
    //check if the authentication header has value
    const authHeader = context.req.headers.authorization 
    if(authHeader){

        const token = authHeader.split("Bearer ")
        if(token) {
            
            try{
                const user = jwt.verify(token,SECRET_KEY);
                return user
            }catch(e) {
                throw new AuthenticationError("Invalid/Token Expired")
            }
        }
        throw new Error("token not found")
    }
    throw new Error("Header must be provided")
    
    }