import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

var router = express.Router();

router.get("/", (req,res) => {
    res.send("hey it's user routes")
})

//update user
router.put("/:id", async(req, res) => {
    if (req.body.userId  === req.params.id  || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }

        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            });
            res.status(208).json("Account has been updated")  //error come from status.app(200)
        } catch(err){
            console.log(err)
            return res.status(500).json(err);  //????? Here is a  error, db can be updated but catch err
        }
    }else{
        return res.status(403).json("You can only update your own account")
    }
})


//delete user


//get a user 


//follow a user

//unfollow a user 
export default router;
