import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { categoryService } from './categoryService'
import { toast } from 'react-toastify'

// This is an THUNK function when user call the "auth/register" will call the register function defined on the userservice 
export const fetchcategories = createAsyncThunk("categories/fetch", async(thunkAPI) => {
    try {
        return await categoryService.getallcategories()
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})


// Initial state of auth service
const categoryState = {
    categories : [],
    isLoading : false,
    isError : false,
    isSucess : false,
    message : "",
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoryState,
    reducers: {},
    extraReducers: (builder) => {
        // defining fewtching all products satate to fetch all products while loading the product page on app
      builder.addCase(fetchcategories.pending,(state) => {
        state.isLoading = true;
      }).addCase(fetchcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.categories = action.payload; 
        // This case for getting the categories
      }).addCase(fetchcategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        // State management incase of failure to fetch the categories  
      })
    },
  })

  export default categoriesSlice.reducer  // Exporting the categoriesSlice reducer -> we have to import this on store.js 