
const Post = require("../../models/Post")

module.exports = {
    Query:{
       async getPosts(){
try{const posts = await Post.find({})
return posts
}catch(e){
console.log(e)
}}
 },
 Mutation:{
     async createPosts(parents,{data:{title,body,published}},ctx,info){
try{
    
const post =  new Post({
    title,
    body,
    published
})

await post.save()
return post


}catch(e){
    console.log(e)
}


     }
 }
    }
 