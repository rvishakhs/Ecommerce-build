import axios from "axios";
import { base_url, config } from "../../uttils/axiosConfig";

// Function to create enquiry
const createEnquiry = async(data) => {
    const response = await axios.post(`${base_url}enquire`, data, config);
    if (response.data) {
        return response.data
    } 
} 

export const enquiryService = {
    createEnquiry,
}