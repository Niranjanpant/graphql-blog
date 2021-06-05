module.exports.validateRegisterInput = (name,email,password,confirmPassword) => {

    const error={}

    if(name.trim() === ""){
        error.name="name cannot be empty"
    }
    if(email.trim() === ""){
        error.email="email cannot be empty"
    }else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
   
   if(!email.match(regex)){
       error.email = "Email must be  valid"
   }
    }

    if(password === ""){
        error.password="password cannot be empty"
    } 
    
    if(confirmPassword === ""){
    error.confirmPassword="confirm password cannot be empty"}

    if(password !== confirmPassword){
        error.confirmPassword="passwords mutch match"
    }

    return {
        error,
        valid:Object.keys(error).length < 1,
    };

};


module.exports.validateLoginUser = (email,password) => {

const error={}

if(email.trim() === ""){
    error.email = "Email cannot be empty"
}else {
    const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if(!email.match(regex)){
error.email = "Must use valid email"
    }
}

if(password === ""){
    error.password = "Passord cannot be empty"
}

return {
    error,
    valid:Object.keys(error).length < 1
}





}