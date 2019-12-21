const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type:String,
        required:true
    },
    pw: {
        type:String,
        required:true,
        minlength:6
    },

    email: {
        type:String,
        required:true
    },
    salt:{type:String}
});

const User = mongoose.model('User', userSchema);

module.exports = User;