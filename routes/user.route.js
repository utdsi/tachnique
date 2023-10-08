const express = require("express")
const userRouter = express.Router()

const {UserLogin,UserRegister}=require("../controller/User.Controller")


userRouter.post("/register",UserRegister),

userRouter.post("/Login",UserLogin)



module.exports = {
    userRouter
}