const express = require('express');
const identityVerify = require('../middleware/auth.middleware')
const postController = require('../controller/post.controller')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router();

// /api/post/
postRouter.post('/',upload.single('photo'),identityVerify,postController.createPost)
postRouter.get('/',identityVerify,postController.getPostImage)
postRouter.get('/details/:postId',identityVerify,postController.getPostDetail)


module.exports = postRouter;


