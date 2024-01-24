import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IuserLogin } from "../GlobalTypes";

const initialState ={
    userName:"",
    userEmail:"",
    userRole:"",
    loading:false,
    errorMessage:"", 
    serverCredentials:{
        api_key:"",
        secret_key:"",
    }
}

export type UserType = typeof initialState

export const logInUser = createAsyncThunk("user/loInuser",async (user:IuserLogin, thunkApi) => {
    try {
        const response = await fetch("/login", {
            method:"POST",
            body: JSON.stringify(user)
        })

        const res = await response.json()
        return res
    } catch (error) {
        return thunkApi.rejectWithValue("Could not create a new user")
    }
})

export const userSlice = createSlice({
    name:"user",
    initialState, 
    reducers:{}, 
    extraReducers:(builder)=>{
        builder
            .addCase(logInUser.pending, (state)=>{
                state.loading = true,
                state.errorMessage =""
            })
            .addCase(logInUser.fulfilled, (state, action)=>{
                state.loading = false,
                state.errorMessage ="",
                state.userEmail = action.payload.email,
                state.serverCredentials = {
                    api_key: action.payload.api_key,
                    secret_key:action.payload.secret_key,
                }
                state.userName = "John Doe",
                state.userRole = "ADMIN"
            })
            .addCase(logInUser.rejected, (state)=>{
                state.loading = false,
                state.errorMessage ="Could not log in user"
            })
    }
})

export default userSlice.reducer