const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    doc_id: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: Number,
        required: true,
    },

},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);