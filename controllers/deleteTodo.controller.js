// Import the model
const Todo = require ("../models/todo.model.js");

const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const todo =  await Todo.findByIdAndDelete(id);

        res.status (200).json (
            {
                success: true,
                message: "Successfully deleted!",
                data: todo
            }
        )
    }
    catch (error) {
        res.status (500).json (
            {
                success: false,
                error: error.message,
                message: "Server error"
            }
        )
    }
}

module.exports = deleteTodo;