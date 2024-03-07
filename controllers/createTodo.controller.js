// Import the model
const Todo = require ("../models/todo.model.js");

const createTodo = async (req, res) => {
    try {
        // Extract title and description from req body
        const {title, description} = req.body;

        // Now create a new Todo object and insert it in the db
        const response = await Todo.create ({title, description});

        // Send a json response with success flag
        res. status(200).json (
            {   
                success: true,
                data: response,
                message: "Entry created successfully"
            }
        )
    }
    catch (error) {
        console.log (error);
        res.status (500).json (
            {
                sucess: false,
                data: "Internal server error",
                message: error.message
            }
        )
    }
}

module.exports = createTodo;