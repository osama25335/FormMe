import {create} from "zustand"
import { axiosInstant } from "../lib/axios";
import toast from 'react-hot-toast'

export const messagesStore = create((set, get) => ({
    requests:[],
    isSending: false,
    isRequestsLoading: false,
    isDeleting: false,

    getRequests : async ()=>{
        set({isRequestsLoading : true});
        try {
            const res = await axiosInstant.get("/messages/getrequests");
            set({requests : res.data});
        } catch (error) {
            toast.error('not getting the requests');
            console.error("getRequests error:", error);
        }finally{
            set({isRequestsLoading : false});
        
        }

    },

    sendRequest: async (messageData)=>{
        set({isSending : true});
        try {
            const res = await axiosInstant.post('/messages/sendrequest',messageData)
            toast.success('Your request will be processed.');
        } catch (error) {
            toast.error('Your request not sending');
            console.error("sendRequests error:", error);
        }finally{
            set({isSending : false});
        }
    },
    deleteRequest: async (_id)=>{
        set({isDeleting: true});
        try {
            const res = await axiosInstant.delete(`/messages/deleterequest/${_id}`);
            toast.success('the request is deleting.');
        } catch (error) {
            toast.error('Your request not deleting');
            console.error("deleteRequests error:", error);
        }finally{
            set({isDeleting: false});
        }
    } 
}));