const bodyparser =require('body-parser')
const express =require('express')
const router= express.Router()
const {addTask, viewTask} = require("../controller/task")

router.use(bodyparser.json());
router.use(express.json());
router.route("/addTask").post(addTask)
router.route("/viewTask").get(viewTask)

module.exports=router 