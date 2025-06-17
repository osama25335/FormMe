import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js"
import mongoose from "mongoose";

export const getRequests = async(req, res)=>{
  try {
      const messages = await Message.find();
      res.status(200).json(messages);
  } catch(error){
        console.log("Error in getMessage controller: ", error);
        res.status(500).json({ error: "Internal server error" });
  }
}

export const sendRequest = async (req,res)=>{
    try {
        const {usermessage, useremail} = req.body;
        const files = req.files;
        const uploadedFiles = [];
        if(!useremail || !usermessage){
            return res.status(400).json({message:"all fields are required"});
        }

        if (files && files.length > 0) {
          for (const file of files) {
            const fileURL = await new Promise((resolve, reject) => {
              const stream = cloudinary.uploader.upload_stream(
                { resource_type: "auto" },
                (error, result) => {
                  if (error) return reject(new Error("Cloudinary upload failed"));
                  resolve(result.secure_url);
                }
              );
              stream.end(file.buffer);
            });
            uploadedFiles.push(fileURL);
          }
        }
    
        const newMessage = new Message({
          files: uploadedFiles, // Make sure your schema uses an array
          usermessage,
          useremail,
        });
          await newMessage.save();
          res.status(201).json({ message: "Message saved" });
    } catch (error) {
        console.log("Error in sendMessage controller: ", error);
        res.status(500).json({ error: "Internal server error" });
    }

}

export const deleteRequest = async (req, res) => {

  try {
    const {_id}  = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const deletedMessage = await Message.findByIdAndDelete(_id);

    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json({ message: "Deleted successfully" });

  } catch (error) {
    console.log("Error in deleteRequest controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
