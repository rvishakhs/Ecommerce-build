import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import productsReducer from '../features/products/producrtSlice';
import categoriesReducer from '../features/Categories/CategorySlice';
import blogReducer from '../features/blogs/blogSlice';
import enquiryReducer from '../features/enquiry/enquirySlice';


export const store = configureStore({
  reducer: {
    auth : authReducer,
    categories : categoriesReducer,
    products : productsReducer,
    blog : blogReducer,
    enquiry : enquiryReducer
  },
});



