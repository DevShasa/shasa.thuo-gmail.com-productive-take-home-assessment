import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Idata } from "../GlobalTypes";
import { UserType } from "./UserSlice";

const initialState: Idata = {
    userName: "",
	userRole: "",
	about: "",
	avatar: "",
	posts: [],
}


export const fetchHomepageData = createAsyncThunk("homepageData/fetch", async(_,thunkApi )=>{
    
    const {user} = thunkApi.getState() as {user:UserType}
    try {
        const response = await fetch("/homepagedata",{
            method:"GET",
            headers:{
                api_key: user.serverCredentials.api_key,
                secret_key:user.serverCredentials.secret_key
            }
        })

        const res =  await response.json() as Idata
        return res
    } catch (error) {
        throw new Error
    }
})
export const homepageSlice = createSlice({
    name:"homepageData",
    initialState, 
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchHomepageData.fulfilled, (state, action)=>{
                console.log("Payload", action.payload)
                state.about = action.payload.about
                state.avatar = action.payload.avatar
                state.posts = action.payload.posts
                state.userName = action.payload.userName
                state.userRole = action.payload.userRole
            })
        }
})

export default homepageSlice.reducer