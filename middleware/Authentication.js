const jwt= require("jsonwebtoken")
require("dotenv").config()

const authentication=(req,res,next)=>{
    let token=req.headers.authorization
    if(token){
        let decode=jwt.verify(token,process.env.secret)
        if(decode){
            next()
        }else{
            return res.status(404).send({"msg":"You have not login"})
        }
    }else{
        return res.status(401).send({"msg":"Routes are protected token is required"})
    }
   
}

module.exports={
    authentication
}