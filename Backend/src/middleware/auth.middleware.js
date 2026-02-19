const jwt=require('jsonwebtoken')


function identityVerify(req,res,next){

    const token = req.cookie.token;

    if(!token){
        return res.status(401).json({
            message:"Token not provided, Unauthorized access"
        })
    }

     let decoded;

    try{

      decoded  = jwt.verify(token,process.env.JWT_SECRET)

    }catch(err){
        return res.status(401).json({
            message:"Invalid token, user not authorized"
        })
    }

    req.user = decoded

        next()

}

module.exports = identityVerify;