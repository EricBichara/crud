const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema({
    employer: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
})

module.exports = workExperienceSchema;