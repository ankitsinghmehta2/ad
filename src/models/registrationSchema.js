const mongoose = require("mongoose")
const registrationSchema = new mongoose.Schema({
    roll_number: {
        type: Number,
        maxlength: 5,
        required: true,
        unique: true
    },
    addhar_number: {
        type: Number,
        minlength: 11,
        required: true
    },

    fname: {
        type: String,
        required: true
    },
    hindi: {
        type: Number


    },
    english: {
        type: Number


    },
    Maths: {
        type: Number
    },
    Result: 
    { 
        type: String
     },

    TOTAL:{ 
        type: Number 
    }
})

const Register = new mongoose.model("Marks", registrationSchema)
module.exports = Register;