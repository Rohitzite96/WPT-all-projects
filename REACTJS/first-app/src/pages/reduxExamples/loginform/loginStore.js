import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlicer"
import { thunk } from "redux-thunk";
export const loginStore=configureStore({
    reducer:{
        loginReducer
    },
    //middleware used for thunk
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})