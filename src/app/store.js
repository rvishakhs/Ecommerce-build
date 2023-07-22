import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import productsReducer from '../features/products/producrtSlice';
import blogReducer from '../features/blogs/blogSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer, 
    products : productsReducer,
    blog : blogReducer,
  },
});



