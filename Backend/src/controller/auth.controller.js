const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
    try {
        const { username, email, password, bio, user_Image } = req.body;

        const isUserAlreadyExist = await userModel.findOne({
            $or: [{ username }, { email }],
        });

        if (isUserAlreadyExist) {
            return res.status(409).json({
                message:
                    isUserAlreadyExist.email == email
                        ? "email already exist"
                        : "username already exist",
            });
        }

        const hash = crypto.createHash("sha256").update(password).digest("hex");

        const user = await userModel.create({
            username,
            email,
            password: hash,
            bio,
            user_Image,
        });

        const token = jwt.sign(
            {
                userID: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        res.cookie("token",token);

        res.status(201).json({
            message: "user created successfully",
            username,
            email,
            bio,
            user_Image,
        });
    } catch (err) {
        console.log("some erroe route in register", err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}

async function loginController(req, res) {
    try {
        const { username, email, password } = req.body;

        const user = await userModel.findOne({
            $or: [{ username }, { email }],
        });
        if (!user) {
            return res.status(409).send("user not found");
        }

        const hash = crypto.createHash("sha256").update(password).digest("hex");

        if (hash !== user.password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token",token);
        res.status(201).json({
            message: "Login Successfully",
               user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.user_Image
            }
        });
    } catch (err) {
        console.log("login error ", err);
    }
}

async function getMeController(req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const userId = req.user.id;

        const user = await userModel.findById(userId);

        res.status(200).json({
            user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.user_Image,
            },
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    registerController,
    loginController,
    getMeController,
};
