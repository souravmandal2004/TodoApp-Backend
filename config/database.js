const mongoose = require ("mongoose");
require ("dotenv").config ();

const dbConnect  = () => {
    mongoose.connect (process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (()=> console.log("DB connected"))
    .catch ( () => console.log ("Error recieved when connecting to the db"));
}
module.exports = dbConnect;