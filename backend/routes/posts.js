import express from "express";
import Post from "../models/Post.js";

var router = express.Router();

//create a post
router.post("/", async(req,res) => {
    const newPost = new Post(req.body)

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err)
    }
})
//update a post 

router.put("/:id", async(req, res)=> {
    try{
        const post = await Post.findById(req.params.id);  //find the post
        if(post.userId === req.body.userId){     // if the post creater's userId is sam as current userId
            await post.updateOne({$set:req.body})
            res.status(200).json("The Post has been updated")   
        }else{
    
            res.status(403).json("You can only update your own post")
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})
//delete a post
router.delete("/:id", async(req, res)=> {
    try{
        const post = await Post.findById(req.params.id);  //find the post
        if(post.userId === req.body.userId){     // if the post creater's userId is sam as current userId
            await post.deleteOne();
            res.status(200).json("The Post has been deleted")   
        }else{
    
            res.status(403).json("You can only delete your own post")
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})

//like a post
router.put("/:id/likes", async(req, res)=> {
    try{
        const post = await Post.findById(req.params.id);  //find the post
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The Post has been Liked")
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The Post has been disLiked")
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})
//get a post
router.get("/:id", async (req,res) => {
    try{
        const post =await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

//get timeline posts
router.get("/timeline/all", async (req,res) =>{
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId:currentUser._id} );
        const friendPosts = await Promise.all(
            currentUser.following.map(friendId =>{
                 return Post.find({userId : friendId})
            })
        )

        res.json(userPosts.concat(...friendPosts));
    }catch(err){
        res.status(500).json(err)
    }
})
export default router;
