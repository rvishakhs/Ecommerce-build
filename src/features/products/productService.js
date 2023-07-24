import axios from "axios";
import { base_url, config } from "../../uttils/axiosConfig";



// Function for fetching Products 
const getallproducts = async() => {
    const response = await axios.get(`${base_url}product`);
    if (response.data) {
        return response.data
    } 
} 

// Fucntion to fetch single Product 
const getsingleproduct = async(id) => {
    const response = await axios.get(`${base_url}product/${id}`,);
    if (response.data) {
        return response.data
    } 
} 

// Adding to wishlist
const addtowishlist = async (productid) => {
    const response = await axios.put(`${base_url}product/` , productid, config)
    if (response.data) {
        return response.data
    }
}

const getwishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config)
    if (response.data) {
        return response.data
    }
}

export const productService = {
    getallproducts,
    getsingleproduct,
    addtowishlist,
    getwishlist
}