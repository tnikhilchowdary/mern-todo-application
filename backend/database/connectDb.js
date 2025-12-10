import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected!")
    }
    catch(error){
        console.log("Error in Connecting MongoDB", error);
    }
}

export default connect;