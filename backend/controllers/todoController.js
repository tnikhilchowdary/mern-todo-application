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

export const addTodo = async (req, res) => {
    try{
        const {addItem} = req.body;
        const add = new Todo({addItem})
        await add.save();

        res.status(200).json({
            message:"Todo Added Successfully",
            add
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error in Adding Data",
            error:error.message
        })
    }
}

export const updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const update = await Todo.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        );
        res.status(200).json({
            message:"Todo Update Successfully",
            update
        })
    }
    catch(error){
        res.status(500).json({
            message:"Errro in Updating Code",
            error:error.message
        })
    }
}