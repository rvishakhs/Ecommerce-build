import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productService } from './productService'
import { toast } from 'react-toastify'

// This is an THUNK function when user call the "auth/register" will call the register function defined on the userservice 

export const fetchproducts = createAsyncThunk("products/fetch", async(thunkAPI) => {
    try {
        return await productService.getallproducts()
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// This route fuction is used to fetch single product and this is an intermediate funtion getting response from RESTAPI and store in to redux store 

export const fetchsingleproduct = createAsyncThunk("product/single", async(prodid, thunkAPI) => {
  try {
      return await productService.getsingleproduct(prodid)
  } catch (err) {
      return  thunkAPI.rejectWithValue(err)
  }
})

// Add to wishlist Functionality 
export const addtowishlist = createAsyncThunk("product/addwishlist", async(productid, thunkAPI) => {
    try {
        return await productService.addtowishlist(productid)
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// fetch wishlist Functionality 
export const getwishlistprod = createAsyncThunk("product/wishlist", async( thunkAPI) => {
    try {
        return await productService.getwishlist()
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
        if (state.isSucess === true) {
          toast.success("Product added to wishlist")
        }
        // This case for adding to wishlist 
      }).addCase(addtowishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        // State management incase of failure to add into wishlist  
      }).addCase(getwishlistprod.pending,(state) => {
        state.isLoading = true;
      }).addCase(getwishlistprod.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.wishlistProd = action.payload;
        // This case for adding to wishlist 
      }).addCase(getwishlistprod.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error; 
        // State management incase of failure to add into wishlist  
      }).addCase(fetchsingleproduct.pending,(state) => {
        state.isLoading = true;
      }).addCase(fetchsingleproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.singleproduct = action.payload;

        // This case for fetching single product and response generated will be saved into singleproduct in products state 
      }).addCase(fetchsingleproduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error; 
        // This state management is for in case the response have some issues   
      })
    },
  })

  export default productsSlice.reducer  // Exporting the productSlice reducer -> we have to import this on store.js 