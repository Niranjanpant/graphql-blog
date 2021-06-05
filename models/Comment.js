const mongoose = require("mongoose")


const CommentSchema = mongoose.Schema({
text:{
type:String
},
createdAt:String,
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
},
post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
}
})





const Comment = mongoose.model("comment",CommentSchema)

module.exports = Comment