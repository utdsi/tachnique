const {taskModel}=require("../models/task.model")

const PostTask=async(req,res)=>{
    try {
        const saveData=new taskModel(req.body)
        await saveData.save()
        res.status(201).send({"msg":"Task has been posted"})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"something went wrong"})
    }
}

const GetTask=async(req,res)=>{
    try {
       const data=await taskModel.find()
       console.log(data)
       res.status(200).send(data)
      
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"something went wrong"})  
    }
}

const GetTaskByparticularId=async(req,res)=>{
    try {
        const id=req.params.id
       const data=await taskModel.findOne({_id:id})
       console.log(data)
       res.status(200).send(data)
      
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"something went wrong"})  
    }
}


const PutTaskByparticularId=async(req,res)=>{
    try {
        const id=req.params.id;
       const data=await taskModel.findByIdAndUpdate({_id:id},req.body);
       console.log(data)
       res.status(200).send({"msg":"Particular task is updated"})
      
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"something went wrong"})  
    }
}

const DeleteTaskByparticularId=async(req,res)=>{
    try {
        const id=req.params.id;
       const data=await taskModel.findByIdAndDelete({_id:id});
       console.log(data)
       res.status(204).send({"msg":"Particular task is deleted"})
      
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"something went wrong"})  
    }
}

module.exports={
    GetTask,
    DeleteTaskByparticularId,
    PutTaskByparticularId,
    GetTaskByparticularId,
    PostTask
}