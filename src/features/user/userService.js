import axios from "axios";
import { base_url } from "../../uttils/axiosConfig";


// Function for registering userdata 
const register = async(userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        return response.data
    } 
} 


// Function for login user
const login = async(userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data))
        return response.data
    } 
} 
export const authService = {
    register,   // register user function exporting for calling in userSlice.js
    login
}

