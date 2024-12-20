import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDb connected");
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }
}

export default dbConnect