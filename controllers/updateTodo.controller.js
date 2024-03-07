// Import the model
const Todo = require ("../models/todo.model.js");

const updateTodo = async (req, res) => {
    try {
        // fetch the id
        const id = req.params.id;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate ({_id: id}, {title, description, updatedAt:Date.now ()}, { new: true });

        res.status (200).json (
            {
                success: true,
                message: "Updated Successfully",
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

module.exports = updateTodo;