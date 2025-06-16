import multer from "multer";

const storage = multer.memoryStorage(); // store in memory for upload to Cloudinary
export const upload = multer({ storage });
