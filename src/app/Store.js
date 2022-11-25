import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../feature/authSlice"
import bookReducer from "../feature/bookSlice"

export const store = configureStore({
    reducer:{
        auth : authReducer,
        book : bookReducer
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})