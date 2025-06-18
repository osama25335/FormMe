import {LoaderCircle, Upload, X} from "lucide-react"
import { useRef, useState } from "react";
import { messagesStore } from "../stores/messagesStore.js"
import toast from 'react-hot-toast'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
export const ContactUsPage = ()=>{

    const [files, setFiles ] = useState([]);
    const [usermessage, setUsermessage ] = useState('');
    const [useremail, setUseremail] = useState('');
    const {isSending, sendRequest} = messagesStore();
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const maxTotalSize = 2 * 1024 * 1024; // 2MB in bytes
    const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > maxTotalSize) {
        toast.error("your file must under 2MB");
        setFiles([]);
        return;
    }
    setFiles(selectedFiles);
    }

    const removeFile = (idx) => {
      setFiles(files.filter((file, index)=>( idx != index)));
      if (fileInputRef.current) fileInputRef.current.value = "";
    };
      const validateForm =()=>{
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
  
    return true;
  }
    const handelSendMessage = async (e)=>{
      e.preventDefault();
      if(!usermessage || !useremail){
        toast.error("all fields are required the file is optional!");
        return;
      }
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));      
      formData.append('usermessage', usermessage);
      formData.append('useremail',useremail);
        try {
          await sendRequest(formData);
          setUsermessage('');
          setUseremail('');
          setFiles([]);
          if (fileInputRef.current) fileInputRef.current.value = "";
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }

return(<>
    <Navbar/>
    <section className="bg-[url('./bg-aboutus.jpeg')] bg-cover">
        <div className="container mx-auto mt-5 px-7 py-10 space-y-5">
            <div className="relative lg:w-1/2 mx-auto p-6 bg-white shadow-primary-color shadow-md rounded">
                 {isSending && <div className="absolute flex justify-center items-center z-50 inset-0 bg-secondary-xlight">
                <LoaderCircle size={64} className="text-primary-color animate-spin"/>
                </div>}
                <h2 className="text-2xl font-semibold text-secondary-color">Send Feedback</h2>
                
                <div className="flex flex-col gap-1 space-y-2">
                    <p className="text-secondary-light font-medium">What is your request? Explain to me how you want this model to be and if you have any file or image send it</p>
                    <div className="flex flex-col justify-center items-center space-y-5 w-full h-32 rounded-md bg-gray-100">
                        
                        <div className="flex flex-col justify-center items-center text-secondary-light">
                            <button className="hover:text-primary-color duration-200 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                                <Upload className="animate-bounce" strokeWidth={3} size={32}/>
                            </button>
                            <p className="mb-1 text-xs font-bold ">Click to upload</p>
                            <p className="text-[10px]">SVG, PNG, JPG or PDF </p>
                        </div>
                        
                    </div>
                    <div className={`${files.length > 0 && "overflow-y-scroll w-full h-20 "} `}>
                        {
                            files.length > 0 && 
                            <div className="flex flex-wrap justify-center">                   
                                {files.map((file, index) => (
                                    <div className="bg-primary-color text-white w-60 p-4 m-3 ms-0 relative overflow-hidden rounded-sm">
                                        <div className="text-nowrap overflow-hidden">{file.name}</div>
                                        <button onClick={(e)=>(removeFile(index))} className="absolute top-0 right-0 text-white bg-primary-color hover:bg-primary-color-hover p-[1px]" ><X strokeWidth={3} size={16}/></button>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <form onSubmit={handelSendMessage}  >
                    <div className="space-y-5">
                        <div className="flex flex-col gap-1 space-y-2">
                            <label htmlFor="setEmail" className="text-secondary-light font-medium">Your E-mail</label>
                            <input
                                type="email"
                                id="setEmail"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color resize-none"
                                placeholder="Write your email..."
                                value={useremail}
                                onChange={(e)=>setUseremail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 space-y-2">
                            <label htmlFor="setUsermessage" className="text-secondary-light font-medium">If there's any further explanation</label>
                            <textarea
                                id="setUsermessage"
                                rows="5"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color resize-none"
                                placeholder="Write your message..."
                                value={usermessage}
                                onChange={(e)=>setUsermessage(e.target.value)}
                            />
                        </div>
                        <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-primary-color hover:bg-primary-color-hover text-white px-5 py-2 rounded-2xl transition"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
</>);
}