// Import the model
const Todo = require ("../models/todo.model.js");

const getTodoById = async (req, res) => {
    try {

        const id = req.params.id;

        // Fetch todo-item from db by the help of it's id
        const todo = await Todo.findById ({ _id: id});

        // send the response
        res.status (200).json ({
            success: true,
            data: todo,
            message: "The todo item has been fetched successfully"
        });

    }
    catch (error) {
        console.error (error);
        res.status (500).json (
            {
                success: false,
                error: error.message,
                message: "Server error"
            }
        )
    }
}

module.exports = getTodoById;