import Todo from "../schema/todoSchema.js";

export const getTodo = async (req, res) => {
    try{
        const todo = await Todo.find({});
        res.status(200).json({
            message:"Fetched Data Successfully",
            todo
        });
    }
    catch(error){
        res.status(501).json({
            message:"Error in Fetching Todo Data",
            error
        })
    }
}