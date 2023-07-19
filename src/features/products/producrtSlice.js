import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productService } from './productService'


// This is an THUNK function when user call the "auth/register" will call the register function defined on the userservice 

export const fetchproducts = createAsyncThunk("products/fetch", async(thunkAPI) => {
    try {
        return await productService.getallproducts()
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})


export const addtowishlist = createAsyncThunk("products/wishlist", async(productid, thunkAPI) => {
    try {
        return await productService.addtowishlist(productid)
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// Initial state of auth service
const productState = {
    product : "",
    isLoading : false,
    isError : false,
    isSucess : false,
    message : "",
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        // defining fewtching all products satate to fetch all products while loading the product page on app
      builder.addCase(fetchproducts.pending,(state) => {
        state.isLoading = true;
      }).addCase(fetchproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.product = action.payload; 
        // This case for getting the product
      }).addCase(fetchproducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        // State management incase of failure to fetch the products  
      }).addCase(addtowishlist.pending,(state) => {
        state.isLoading = true;
      }).addCase(addtowishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.addtowishlist = action.payload;
        state.message = "Product added to wishlist"

        state.product = action.payload; 
        // This case for adding to wishlist 
      }).addCase(addtowishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        // State management incase of failure to add into wishlist  
      })
    },
  })

  export default productsSlice.reducer     // Exporting the productSlice reducer -> we have to import this on store.js 