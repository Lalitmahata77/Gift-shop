import asyncHandler from "../middleware/asycHandler.js";
import User from "../model/userModel.js";
import bcrtpt from "bcryptjs"
import createToken from "../utils/createToken.js";
export const register = asyncHandler(async(req,res,next)=>{
    const {username,email,password} = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("Please fill all fields")
    }
    const user = await User.findOne({email})
    if(user) {
        res.status(400)
        throw new Error("user already exist")
    }
   
    const salt = await bcrtpt.genSalt(10)
    const hashedPassword = await bcrtpt.hash(password,salt)
    const newUser = new User({email,username,password:hashedPassword})
    try {
        createToken(res,newUser._id)
        await newUser.save()
        res.status(200).json({
        newUser,
        success : true
        })
    } catch (error) {
        console.log(error.message);
        
    }
})

export const login = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("Please fill all fields")
    }
    const existedUser = await User.findOne({email})
    try {
        if (existedUser) {
            const isPasswordValid = await bcrtpt.compare(password,existedUser.password)
            if (isPasswordValid) {
                createToken(res,existedUser._id)
                res.status(200).json({
                    _id : existedUser._id,
                    username:existedUser.username,
                    email:existedUser.email,
                    isAdmin : existedUser.isAdmin,
                    success:true
                })
                return
            }
        }
    } catch (error) {
console.log(error);
res.status(400).json({message:"User not exist"})

    }
})

export const logout = asyncHandler(async(req,res,next)=>{
    res.cookie("jwt","", {
        httpOnly:true,
        expires : new Date(0)
    })
    res.status(200).json("logout successfully")
})

export const getAllUsers = asyncHandler(async(req,res,next)=>{
    try {
        const users = await User.find({})
        res.status(200).json({users,success:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
})

export const getUserProfile = asyncHandler(async(req,res,next)=>{
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
})

export const getUserDetails = asyncHandler(async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
})

export const deleteUser = asyncHandler(async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if(user.isAdmin){
            res.status(401)
            throw new Error("Can not delete admin")
        }
        await User.deleteOne({_id:user._id})
        res.status(200).json({message : "user removed"})
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error")
        
    }
})

export const updateCurrentUserProfile = asyncHandler(async(req,res,next)=>{
    try {
        const user = await User.findById(req.user._id)
        if (user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email

            if (req.body.password) {
                const salt = await bcrtpt.genSalt(10)
                const hashedPassword = await bcrtpt.hash(req.body.password,salt)
                user.password = hashedPassword
            }
            const updatedUser = await user.save()
            res.status(200).json({
                _id : updatedUser._id,
                name : updatedUser.username,
                email : updatedUser.email,
                isAdmin : updatedUser.isAdmin
            })
        }else{
            res.status(400)
            throw new Error("User not found")
        }

        
    } catch (error) {
        console.log(error);
        
        res.status(500).json("Internal server error")
    }
})

export const upadteUserById = asyncHandler(async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email
            user.isAdmin = Boolean(req.body.isAdmin);
  
            const updatedUser = await user.save();
        
            res.json({
              _id: updatedUser._id,
              username: updatedUser.username,
              email: updatedUser.email,
              isAdmin: updatedUser.isAdmin,
            });
          } else {
            res.status(404);
            throw new Error("User not found");
          }
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Inetrnal server error"})
        
    }
})