const express = require("express");
const {registerController,loginController,getMeController} = require('../controller/auth.controller');
const identityVerify = require("../middleware/auth.middleware");


const authRouter = express.Router();

authRouter.post("/register",registerController );

authRouter.post("/login", loginController );

authRouter.get('/get-me',identityVerify,getMeController)


module.exports = authRouter;
