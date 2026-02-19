const express = require('express')
const { followController, unfollowController } = require('../controller/user.controller')
const identityVerify = require('../middleware/auth.middleware')


const userRouter = express.Router()


/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post('/follow/:userid',identityVerify,followController)


/** 
 * @route POST /api/users/unfollow/:userid
 * @description Unfollow a user
 * @access Private
 */
userRouter.post('/unfollow/:userid',identityVerify,unfollowController)