const mongoose = require("mongoose")
require("dotenv").config()


const taskSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: true, default: 'pending', enum: ["pending", "Completed"] },

},
{
    timestamps:true
})
const taskModel = mongoose.model("task", taskSchema)

module.exports = {
    taskModel
}

