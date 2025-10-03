const express =require("express")
require("./src/database/connection")
const allRoutes=require("./src/routes/route.js")


const PORT = 3000;

const app =  express()

app.use("/api",allRoutes)


app.listen(PORT,()=>{
    console.log("RUNNING AT PORT ",`${PORT}`)
})



