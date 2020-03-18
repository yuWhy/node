const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    likes: [String],
    collage: String,
    admissionTime: String
});
const User = mongoose.model('User', userSchema);

module.exports = User;