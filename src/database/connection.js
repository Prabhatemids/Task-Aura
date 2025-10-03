const mongoose =require('mongoose')
const url = "mongodb+srv://prabhat:Qwerty@cluster0.9k3k4a5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url).then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log("Conncetion failed")
})