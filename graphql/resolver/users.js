
const User = require("../../models/User")

module.exports = {
    Query:{
       async getUsers(){
try{

const users = await User.find({})
return users
}catch(e){
console.log(e)
}
       }
        }
    }
 