const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        min:10,
        max:10
    },
    age: {
        type: Number,
        required: true,
        max: 60 
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    course: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
