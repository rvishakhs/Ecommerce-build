import axios from "axios";
import { base_url, config } from "../../uttils/axiosConfig";



// Function for fetching Products 
const getallblogs = async() => {
    const response = await axios.get(`${base_url}blog`);
    if (response.data) {
        return response.data
    } 
} 

// Fetch Single blog
const getsingleblog = async (id) => {
    const response = await axios.get(`${base_url}blog/${id}`)
    if (response.data) {
        return response.data
    }
}

export const BlogService = {
    getallblogs,
    getsingleblog
}