const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already exist"],
        requires:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id already exist"]
    },
    password:{
        type:String,
        required:true
    },
    user_Image:{
        type:String,
        default:'https://i.postimg.cc/jj8W1YkB/default-avatar-profile-icon-transparent-png-vector-57812458.avif'
    },
    bio:String,
},{timestamps:true})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;