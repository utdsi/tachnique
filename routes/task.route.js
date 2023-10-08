const express=require("express")
const taskRoute=express.Router()
const {authentication}=require("../middleware/Authentication")
const {GetTask,DeleteTaskByparticularId,PutTaskByparticularId,GetTaskByparticularId,PostTask}=require('../controller/Task.Controller')
taskRoute.use(authentication);

taskRoute.post("/tasks",PostTask);
taskRoute.get("/tasks",GetTask);
taskRoute.get("/tasks/:id",GetTaskByparticularId);
taskRoute.patch("/tasks/:id",PutTaskByparticularId);
taskRoute.delete("/tasks/:id",DeleteTaskByparticularId);
module.exports={
    taskRoute
}
