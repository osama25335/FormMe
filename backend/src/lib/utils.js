import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{expiresIn:"7d"});
    
    res.cookie("jwt", token,{
        maxAge: 7 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, //prevent XSS attacks cros-site scripting attack
        sameSite: "strict", //csrf attack cros-site requist frogrey attacks 
        secure: process.env.NODE_ENV !== "helloformeup" 
    })
    return token;
}