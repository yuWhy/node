const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 20
    },
    age: Number,
    like: [String],
    email: String
})
const User = mongoose.model('user', userSchema);

module.exports = User;