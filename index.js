const express = require ("express");
const app = express ();
require ("dotenv").config ();
// import routes
const todoRoutes = require ("./routes/todos.routes.js"); 
//import dbConnect
const dbConnect = require ("./config/database.js");

const PORT = process.env.PORT || 4000;

// middleware to parse json req body
app.use (express.json ());

// Mounting the routes --> means add /api/v1
app.use ("/api/v1", todoRoutes);

// start the server
app.listen (PORT, () => {
    console.log (`Server at started ${PORT}`);
});

// connect to the db
dbConnect ();

// Default route
app.get ("/", (req, res) => {
    res.send (`<h1> This is the homePage </h1>`);
});