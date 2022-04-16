const express= require("express");
const router= express.Router();
const dotenv= require("dotenv");
const User= require("../models/userSchema");
const cookieParser= require("cookie-parser");
const auth= require("../middleware/auth");
const jwt= require("jsonwebtoken");

router.use(cookieParser());
dotenv.config({path:"../config.env"});
<<<<<<< HEAD
router.post("/authenticate",(req,res)=>
=======
router.post("/authenticate",async (req,res)=>
>>>>>>> origin/mahip
{ 

    try {
    
        const token= req.body.token;
<<<<<<< HEAD
=======
        console.log(token);

>>>>>>> origin/mahip
        

        const sec=process.env.SECRET_KEY;
        const verifyUser= jwt.verify(token,sec);
       
        
<<<<<<< HEAD
        const user=User.findOne({_id:verifyUser._id,"tokens.token":token});
        
        
=======
        const user= await User.findOne({_id:verifyUser._id,"tokens.token":token});
        
        console.log(user);
>>>>>>> origin/mahip
        if(!user){
            
            throw error;
        }
    
        
    } catch (error) {
        console.log("ERROR FOUND");
<<<<<<< HEAD
        res.status(202).json("");
=======
        res.status(202).send("");
>>>>>>> origin/mahip
    }
});

module.exports=router;
