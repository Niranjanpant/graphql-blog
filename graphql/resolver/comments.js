
const Comment = require("../../models/Comment")

module.exports = {
    Query:{
       async getComments(){
try{

const comments = await Comment.find({})
return comments
}catch(e){
console.log(e)
}
       }
        }
    }
 