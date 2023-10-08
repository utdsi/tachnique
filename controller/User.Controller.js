
const {userModel}=require('../models/user.models');
require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")

const UserRegister= async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(201).send({ "msg": "User is already Registered" })
        }
        let hash = bcrypt.hashSync(password, 6)
        const userdata =new userModel({ name, email, password: hash })
        console.log(userdata)
        await userdata.save()
        res.status(200).send("register successful")
    } catch (error) {
        res.status(404).send("Something went wrong")
    }
}


const UserLogin=async (req, res) => {
    const { email, password } = req.body

    try {
        let checkEmail = await userModel.find({ email })
        console.log(checkEmail)
        if (checkEmail.length === 0) {
            res.status(402).send({ "msg": "Register first" })
        } else {
            bcrypt.compare(password, checkEmail[0].password, async (err, result) => {
                if (err) {
                    res.status(502).send({ "msg": "Error in comparing password" })
                } else {
                    let token = jwt.sign({userId:checkEmail[0]._id},process.env.Secret)
                    res.status(201).send({ "msg": "user has been login successfully", token })
                }
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ "msg": "Something went wrong" })
    }
}

module.exports={
    UserLogin,
    UserRegister
}