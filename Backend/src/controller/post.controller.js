const postModel = require('../models/post.model')
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')

const imagekit = new ImageKit({
        privateKey:process.env.ImageKit_PrivateKey
        
    })

async function createPost(req,res){

    console.log(req.body,req.file);
 
    try{

        const file = await imagekit.files.upload({
            
            file: await toFile(Buffer.from(req.file.buffer),"file"),
            fileName:"Text"

            
        })

        res.send(file)
    }catch(err){
        "this error is create post function =>     ",err
    }

}

module.exports ={
    createPost
}