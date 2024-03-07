// Import the model
const Todo = require ("../models/todo.model.js");

const getTodo = async (req, res) => {
    try {
        // Fetch all todo-items from db
        const todos = await Todo.find ({});

        // send the response
        res.status (200).json ({
            success: true,
            data: todos,
            message: "Entire todo items have been fetched successfully"
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

module.exports = getTodo;