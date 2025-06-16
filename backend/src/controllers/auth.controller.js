import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const signup = async (req,res)=>{
  const{ username, password, pageKey, role } = req.body;
  try {
      if(!username || !password || !role){
          return res.status(400).json({message:"all fields are required"});
      }
      if(password.length<8){
          return res.status(400).json({message:"password must be at least 8 characters"});
      }

      const user=await User.findOne({username});
      if(user) return res.status(400).json({message:"username already exist"});

      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(password,salt);

      const newUser= new User({
          username,
          password:hashedpassword,
          pageKey,
          role
      });
      if (newUser) {
          //generate jwt token here
          generateToken(newUser._id,res);
          await newUser.save();
          res.status(201).json({
            _id:newUser._id,
            username:newUser.username,
            password:newUser.password,
            pageKey:newUser.pageKey,
            role:newUser.role
          });
      } else {
          res.status(400).json({message:"invalide user data"});
      }

  } catch (error) {
      console.log("error signup controller",error.message);
      res.status(500).json({message:"Iternal server error"});
      
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
        if (!username || !password) {
        return res.status(400).json({ message: "the fields is required" });
        }
        if (password < 8) {
        return res.status(400).json({ message: "your password is under 8" });
        }
        const user = await User.findOne({ username }).select("+password");
        if (!user) {
        return res.status(400).json({ message: "you don't have username"});
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword){
            return res.status(400).json({message: "invalide password"});
        }
        generateToken(user._id,res);
        res.status(200).json({
          _id: user._id,
          username: user.username,
          password: user.password,
          pageKey:user.pageKey,
          role:user.role,
      });
        
  } catch (error) {
    console.log("error login controller",error.message);
  }
};
export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logged out successefully"})
        
    } catch (error) {
        console.log("error logout controller",error.message);
        res.status(500).json({message:"Iternal server error"});
    }
};
export const checkAuth = async (req, res)=>{
    try {
        res.status(200).json(req.user);

    } catch (error) {
        console.log("error in checkAuth controller",error.message);
        res.status(500).json({message:"Iternal server error"});
    }
}