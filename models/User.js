const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
name:{
    type:String
},
email:{
    type:String,
    unique:true
},
password:{
type:String
},
age:{
    type:String
},
createdAt:String,
posts:[{
    title:String,
    body:String,
    published:String,
    createdAt:String
}],
comments:[{
    text:String,
createdAt:String    
}]

})





const User = mongoose.model("user",UserSchema)

module.exports = User