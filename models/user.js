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
    birthdate: {
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
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema);