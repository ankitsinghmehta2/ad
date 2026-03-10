const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/teacher").then(()=>{
    console.log("connection established with database")
}).catch((err)=>{
    console.log(err);
})
