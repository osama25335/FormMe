import {create} from "zustand"
import { axiosInstant } from "../lib/axios";
import toast from 'react-hot-toast'

export const authUsersStore = create((set, get) => ({
    authUser:null,
    islogin:false,
    isCheckingAuth: true,
    
    checkAuth: async ()=>{
        try {
            const res = await axiosInstant.get("/auth/checkauth");
            set({authUser: res.data});
        } catch (error) {
            console.log("error in ckeckAuth : ",error);
            set({authUser: null});
        } finally{
            set({isCheckingAuth: false});
        }
    },

    login: async (data)=>{
        set({islogin:true});
        try {
            const res = await  axiosInstant.post("/auth/login",data);
            set({authUser:res.data});
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error('logged is not correct!!');
            console.error("login error:", error);
        }finally{
            set({islogin:false})
        }
    },
     logout : async (data)=>{
        try {
            const res = await axiosInstant.post("/auth/logout",data);
            set({authUser:null});
            toast.success("Logout in successfully");
        } catch (error) {
            console.error("logout error:", error);
        }
    }
}));