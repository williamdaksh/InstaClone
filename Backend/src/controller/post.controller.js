const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const likeModel = require("../models/like.model");

const imagekit = new ImageKit({
  privateKey: process.env.ImageKit_PrivateKey,
});

async function createPost(req, res) {
  // console.log(req.body,req.file);

  try {
    const file = await imagekit.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: req.file.originalname,
      folder: "insta_post",
    });

    console.log("url", file.url, "caption", req.body.caption);

    const post = await postModel.create({
      imgUrl: file.url,
      caption: req.body.caption,
      user: req.user.id,
    });

    res.status(201).json({
      message: "post create successgully",
      post,
    });
  } catch (err) {
    console.log("this error is create post function in post controller =>     ", err);
  }
}

async function getPostImage(req, res) {


  const userId = req.user.id;

  const post = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "post fetch successfully",
    post,
  });
}

async function getPostDetail(req, res) {

  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById({ postId });

  if (!post) {
    return res.status(404).json({
      message: "Post not found.",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden Content.",
    });
  }

  return res.status(200).json({
    message: "Post fetched  successfully.",
    post,
  });
}

async function feedPostDetails(req,res){
    const post = await postModel.find().populate("user")

    res.send(post)
}

async function likePost(req,res){

    const username = req.user.username;
    const postId = req.params.postId

    const post = await postModel.findById({postId})

    if(!post){
        res.status(404).json({
            message:"post not found"
        })
    }

    const like = await likeModel.create({
        post:postId,
        user:username
    })

    res.status(200).json({
        message:"post like successfully",
        like
    })

}

module.exports = {
  createPost,
  getPostImage,
  getPostDetail,
  feedPostDetails,
  likePost
};
