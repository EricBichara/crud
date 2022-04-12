const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    name: {
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

module.exports = educationSchema;