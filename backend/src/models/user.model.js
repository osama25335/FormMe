import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,// This makes sure an username is provided
        unique: true,
        trim: true, // Prevents unnecessary spaces in names
    },
    password:{
        type: String,
        required: true,
        select: false, // Prevent password from being included in queries by default
        minlength: 8,
    },     
    pageKey:{
        type:String,
        required: false,// This makes sure an pageKey is provided
        unique: true,
        trim: true, // Prevents unnecessary spaces in names
    },
    role:{
        type: String,
        required: true,// This makes sure an username is provided
        enum: ['user', 'admin'],
        unique: true,
        trim: true, // Prevents unnecessary spaces in names
    }

},
{
    timestamps: true,   // Enables automatic timestamps 
                        // (createdAt:  Stores the date/time when the document was first created.) 
                        // (updatedAt: Stores the date/time when the document was last modified.)

}
);

const User = mongoose.model("User", userSchema); // create a class use model

export default User;