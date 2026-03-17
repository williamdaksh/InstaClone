const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    caption:{
        type:String,
        default:""
    },
    title:{
        type:String
    },
    userID:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",  // user show kar raha h ki wo kis collection se hai
        required:[false,"userid required for creating the post"]
    },
    imgUrl:{
        type:String,
    }
})

const postModel  =  mongoose.model("post",postSchema);

module.exports = postModel;