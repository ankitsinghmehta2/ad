const mongoose = require("mongoose");

// Define the schema for the teacher
const teacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create the model for the teacher
const teacherSchema1 = mongoose.model("login", teacherSchema);

// Export the model
module.exports = teacherSchema1;
