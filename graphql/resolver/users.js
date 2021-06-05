const {UserInputError} = require("apollo-server")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/User")
const {validateRegisterInput,validateLoginUser} = require("../../utils/validator")
const {SECRET_KEY}= require("../../config/config")


function generateToken(user){

return jwt.sign({
    id:user._id,
    name:user.name,
    email:user.email
},SECRET_KEY,{expiresIn:"2h"}) 

}

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
        },
        Mutation:{
            async registerUser(_,{data:{name,email,password,confirmPassword}},ctx,info){

                try{
            //validate the inputs
            
            const {valid,error} = validateRegisterInput(name,email,password,confirmPassword)
                if(!valid){
                    throw new UserInputError("Error",{
                        error:error
                    })
                }

            // //make sure that email is unique
            const user = await User.findOne({email})
            
            if(user){
                throw new UserInputError("username already exists")
            }

            //now we need to hash the password
            password = await bcrypt.hash(password,10)

        const newUser = new User({
            name,
            email,
            password,
            createdAt:new Date().toISOString(),

        })
         const res = await newUser.save()
        
  //now generate jwt token for user
        const token = generateToken(res)

        return{
            ...res._doc,
           id: res._id,
            token
        }
          }
                catch(e){
                    console.log(e)
                }



            },
            async loginUser(_,{data:{email,password}},ctx,info){

                try{

                const {error,valid} = validateLoginUser(email,password)

                if(!valid){
                    throw new UserInputError("Error",{
                        error:error
                    })
                }

                //check for the user
                const user = await User.findOne({email})

                //check if user exist or not
                if(!user){
                    error.general ="User not found"
                    throw new UserInputError("User doesnot exist",{
                        error:error
                    })
                }

                //verify the password for the user
                const matched = await bcrypt.compare(password,user.password)
console.log(matched)
                if(!matched){
                    throw new UserInputError("Wrong Crendentials")
                }

                const token = generateToken(user)

                return {
                    ...user._doc,
                    id:user._id,
                    token
                }

                }catch(e) {

                }


            }
        }
    }
 