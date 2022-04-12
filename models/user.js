const mongoose = require("mongoose");
const Education = require('./education.js');
const WorkExperience = require('./workExperience.js');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    education: {
        type: [Education],
        default: []
    },
    workExperience: {
        type: [WorkExperience],
        default: []
    },
    isMarried: {
        type: Boolean,
        required: true
    },
    gender: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        required: true
    }

}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema);