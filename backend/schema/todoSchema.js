import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        addItem:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
);

export default mongoose.model("Todo", todoSchema);