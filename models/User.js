const mongoose = require('mongoose')
const userSchema = {
    id : {
        type : String,
        auto : true
    },
    username : String,
    email : String,
    password : String
}

const User = mongoose.model("User", userSchema);

module.exports = User;
