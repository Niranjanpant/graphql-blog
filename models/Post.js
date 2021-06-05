const mongoose = require("mongoose")


const PostSchema = mongoose.Schema({
title:{
type:String
},
body:{
    type:String
},
published:{
    type:Boolean
},
createdAt:String,

comments:[{
    text:String,
    }]
,
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
}
})





const Post = mongoose.model("post",PostSchema)

module.exports = Post