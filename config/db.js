import mongoose  from "mongoose";

mongoose.connect('')
.then(()=>console.log("db connected"))
.catch((e)=>console.log("Mongoose connection error:",e))

export default mongoose