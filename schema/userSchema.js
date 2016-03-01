var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    pwd: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = UserSchema;