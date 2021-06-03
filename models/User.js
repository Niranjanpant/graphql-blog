const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
name:{
    type:String
},
email:{
    type:String
},
age:{
    type:String
},
posts:[{
    title:String,
    body:String,
    published:String,
}],
comments:[{
    text:String,
    
}]

})





const User = mongoose.model("user",UserSchema)

module.exports = User