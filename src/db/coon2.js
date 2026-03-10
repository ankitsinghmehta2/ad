const mongoose = require("mongoose");

// MongoDB connection string
const uri = "your_connection_string_here";

// Establish connection to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection established with database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

// Export the established connection
module.exports = connectDB;
