import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BlogService } from './blogService'


// Function to fetch allblog details 

export const fetchblogs = createAsyncThunk("blog/fetch", async(thunkAPI) => {
    try {
        return await BlogService.getallblogs()
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// Add to wishlist Functionality 
export const getAblog = createAsyncThunk("blogs/blogpost", async(id, thunkAPI) => {
    try {
        return await BlogService.getsingleblog(id)
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// Initial state of auth service
const blogState = {
    blogs : "",
    isLoading : false,
    isError : false,
    isSucess : false,
    message : "",
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        // defining fewtching all products satate to fetch all products while loading the product page on app
      builder.addCase(fetchblogs.pending,(state) => {
        state.isLoading = true;
      }).addCase(fetchblogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.blogs = action.payload; 
        // This case for getting the product
      }).addCase(fetchblogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        // State management incase of failure to fetch the products  
      }).addCase(getAblog.pending,(state) => {
        state.isLoading = true;
      }).addCase(getAblog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.fetchedblog = action.payload; 
        // This case for getting the product
      }).addCase(getAblog.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        // State management incase of failure to fetch the products  
      })
    },
  })

  export default blogSlice.reducer  // Exporting the productSlice reducer -> we have to import this on store.js 