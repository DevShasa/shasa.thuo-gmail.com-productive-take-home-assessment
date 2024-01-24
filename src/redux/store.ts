import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import homepageReducer from "./HomepageSlice"

export const store = configureStore({
    reducer:{
        user:userReducer,
        homepage: homepageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch