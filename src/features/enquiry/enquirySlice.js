
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { enquiryService } from './enquiryService'

// This is an THUNK function when user call the "auth/register" will call the register function defined on the userservice 

export const enquiry = createAsyncThunk("contact/enquiry", async(data, thunkAPI) => {
    try {
        return await enquiryService.createEnquiry(data)
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// Initial state of auth service
const enquiryState = {
    enquiry : "",
    isLoading : false,
    isError : false,
    isSucess : false,
    message : "",
}

export const enquirySlice = createSlice({
    name: 'enquiry',
    initialState: enquiryState,
    reducers: {},
    extraReducers: (builder) => {
        // defining loading state for enquiry
      builder.addCase(enquiry.pending,(state) => {
        state.isLoading = true;
      }).addCase(enquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.enquiry = action.payload; 
        // This case for successull enquiry made
      }).addCase(enquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
      })// State management incase of failure to pass enquiry to server
    },
  })

  export default enquirySlice.reducer  // Exporting the enquirySlice reducer -> we have to import this on store.js 