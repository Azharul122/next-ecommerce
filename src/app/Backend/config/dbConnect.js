import mongoose from "mongoose";

const dbConnect=()=>{
    if(mongoose.Connection.readyState>=1){
        return
    }
    mongoose.connect(process.env.dbURI)
}

export default dbConnect