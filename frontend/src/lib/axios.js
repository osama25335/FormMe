import axios from "axios"


export const axiosInstant = axios.create({
    baseURL:import.meta.env.MODE === "helloformeup" ? "http://localhost:5001/api" : "/api",
    withCredentials:true
})