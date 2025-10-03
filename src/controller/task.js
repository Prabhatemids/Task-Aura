const TaskModel =require("../database/task")

const addTask = async(req,res)=>{
    const taskDetails = TaskModel({
        task:req.body.task,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        assignedto: req.body.assignedto,
        duedate: req.body.duedate,
        tags: req.body.tags,
        createdby: req.body.createdby,
    })
    await taskDetails.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })
}

const viewTask = (req,res)=>{
    TaskModel.find().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log("error",error)
    })
}

module.exports={addTask,viewTask}