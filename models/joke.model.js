// first we import mongoose
const mongoose = require("mongoose");

// 1. DEFINING THE SCHEMA
//    attributes with 
//    data type and validations
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    }
}, {timestamps: true})
// 2. REGISTERING THE SCHEMA
const Joke = mongoose.model('Joke',JokeSchema)
//              first paramater (string) is the collections NAME
//              second parameter must match Class name

// 3. EXPORTING TEH SCHEMA TO USE FOR LATER
module.exports = Joke