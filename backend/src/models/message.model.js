import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    files:{
        type: [String],
    },
    usermessage:{
        type: String,
        trim: true, // Prevents unnecessary spaces in names        
    },
    useremail:{
        type: String,
        trim: true, // Prevents unnecessary spaces in names
    }
},
{
    timestamps: true,   // Enables automatic timestamps 
                        // (createdAt:  Stores the date/time when the document was first created.) 
                        // (updatedAt: Stores the date/time when the document was last modified.)

});
const Message=mongoose.model("message", messageSchema);

export default Message;
