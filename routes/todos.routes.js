const createTodo = require ("../controllers/createTodo.controller.js");
const getTodo = require ("../controllers/getTodo.controller.js");
const getTodoById = require ("../controllers/getTodoById.controller.js");
const updateTodo = require ("../controllers/updateTodo.controller.js");
const deleteTodo = require ("../controllers/deleteTodo.controller.js");

const express = require ("express");
const router = express.Router ();

// define API routes
router.post ("/createTodo", createTodo);
router.get ("/getTodos", getTodo);
router.get ("/getTodos/:id", getTodoById);
router.put ("/updateTodo/:id", updateTodo);
router.delete ("/deleteTodo/:id", deleteTodo);


module.exports = router;