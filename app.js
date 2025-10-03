const express =require("express")
require("./src/database/connection")
const allRoutes=require("./src/routes/route.js")
var cors = require("cors");


const PORT = process.env.PORT || 3000;

const app =  express()

app.use(cors());

app.use("/api",allRoutes)


app.listen(PORT,()=>{
    console.log("RUNNING AT PORT ",`${PORT}`)
})



