const express=require("express")
const {connection} = require("./config/db")
const {userRouter}=require("./routes/user.route")
const {taskRoute} = require("./routes/task.route")
require("dotenv").config()
const app=express()
app.use(express.json())




app.use("/User",userRouter)
app.use(taskRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server is running at the port")
    } catch (error) {
        console.log("Server is not running")
    }
    console.log(`http://localhost:${process.env.port}`);
})


