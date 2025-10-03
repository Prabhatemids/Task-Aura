const mongoose = require('mongoose');
const TaskSchema =mongoose.Schema({
    task:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum:["todo","in-progress","done"]
    },
    priority:{
        type: Number,
        min:1,
        max:5
    },
    assignedto:{
        type:String
    },
    duedate:{
        type:Date
    },
    tags:[{
        type: String
    }],
    createdby:{
        type:String
    },
    createdat:{
        type:Date    
    },
    updatedat:{
        type:Date
    },

})

const TaskModel = mongoose.model("Tasks",TaskSchema)
module.exports=TaskModel