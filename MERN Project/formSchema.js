const mongoose = require('mongoose');

const FormSchema = mongoose.Schema({
    position: {
        type: String,
        required: true,
        lowercase: true
    },
    industry: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Job', FormSchema);