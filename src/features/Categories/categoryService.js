import axios from "axios";
import { base_url, config } from "../../uttils/axiosConfig";



// Function for fetching Categories
const getallcategories = async() => {
    const response = await axios.get(`${base_url}categories`);
    if (response.data) {
        return response.data
    } 
} 


export const categoryService = {
    getallcategories,
}