import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authService } from './userService'
import { toast } from 'react-toastify'


// This is an THUNK function when user call the "auth/register" will call the register function defined on the userservice 

export const registeruser = createAsyncThunk("auth/register", async(userData, thunkAPI) => {
    try {
        return await authService.register(userData)
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

export const loginuser = createAsyncThunk("auth/login", async(userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    } catch (err) {
        return  thunkAPI.rejectWithValue(err)
    }
})

// Initial state of auth service
const initialstate = {
    user : "",
    isLoading : false,
    isError : false,
    isSucess : false,
    message : "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialstate,
    reducers: {},
    extraReducers: (builder) => {
        // Add case like if registeuser function in pending state and manage the state according to that
      builder.addCase(registeruser.pending,(state) => {
        state.isLoading = true;
      }).addCase(registeruser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.createdUser = action.payload; 
        if (state.isSucess === true) {
            toast.success("User created succesfully | Go back to login page")
        }
        // This Case manage the events when the request get sucessfull and update the user with data
      }).addCase(registeruser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error 
        if (state.isError === true) { 
            toast.error(`Error Occured !! ${JSON.stringify(action.error)}` )
        }
        // This is the last case when an user register function get rejected and the state updated with error 
      }).addCase(loginuser.pending,(state) => {
        state.isLoading = true;
      }).addCase(loginuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.isError = false;
        state.user = action.payload;
        if (state.isSucess === true) {
            localStorage.setItem("token", action.payload.token)
            toast.success("user logged succesfully")
        }
        // This section is for logging in existing User 
      }).addCase(loginuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) { 
            toast.error(`Login Failed try again ` )
        }
      })
    },
  })

  export default authSlice.reducer     // Exporting the authSlice reducer -> we have to import this on store.js 