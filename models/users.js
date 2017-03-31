var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    local: {
        firstLanguage: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        username: String
    }
});

module.exports = mongoose.model('User', userSchema);