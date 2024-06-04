const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post("/createuser",async(req,res)=>{
    try{ 
        await User.create({
            // name:req.body.name,
            // password:req.body.password,
            // email:req.body.email,
            // location:req.body.location

            name:"radha",
            password:"12344321",
            email:"radha@google.com",
            location:"govindqa"
        }) 
        res.json({success:true});
   

        
    } catch(error){
        console.log(error)
        console.error("error creating user", error.message)
        res.json({success:false, error:error.message}); 
    }
})
module.exports = router;



// const {body, validationresult, validationResult} = require('express-validator');
// router.post("/createuser",[
//     body('email').isEmail(),
//     body('name').isLength({min:5}),
//     body('password','Incorrect Password').isLength({min:5})]
//     , async (req,res)=>{
//         const errors = validationresult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//     try{
//         const user = await User.create({
//             name: req.body.name ,
//             password:req.body.password,
//             email:req.body.email,
//             location:req.body.location
//         });
//         console.log("user created:",user);
//         res.json({success:true});
//     }catch(error){
//         console.log(error);
//         res.json({success:false});
//     }
// });


// router.post("/loginuser",[
//     body('email').isEmail(),
//     body('password','Incorrect Password').isLength({min:5})]
//     ,async(req,res)=>{
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//     let email=res.body.email;
//     try{
//         let userData = await User.findOne({email});
//         if(!userData){
//             return res.status(400).json({errors: "Try logging with correct credentials"})
//         }

//         if(req.body.password !== userData.password){
//             return res.status(400).json({errors: "Try logging with correct credentials"})
//         }
//         return res.json({success:true})
// } catch(error){
//     console.log(error)
//     console.error("error creating user", error.message)
//     res.json({success:false, error:error.message}); 
// }
// })
// module.exports = router;
