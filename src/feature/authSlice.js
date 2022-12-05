import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const loginUser = createAsyncThunk("user/loginUser",async(user,thunkAPI)=>{
    try{
        const response = await axios.post(`${process.env.REACT_APP_URL}/login`,{
            email:user.email,
            password:user.password
        },{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        console.log(response.data.headers['Content-Type']); 
        sessionStorage.setItem("session", response.data.uuid);
        return response.data
    }catch(error){
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message)
        }
    }
})

export const getMe = createAsyncThunk("user/getMe",async(_,thunkAPI)=>{
    try{
        const response = await axios.get(`${process.env.REACT_APP_URL}/me`);
        return response.data
    }catch(error){
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message)
        }
    }
})

export const logOut = createAsyncThunk("user/logOut",async()=>{
    await axios.delete(`${process.env.REACT_APP_URL}/logOut`);
})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;
        })
        //get user login
        builder.addCase(getMe.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(getMe.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(getMe.rejected,(state,action)=>{
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;
        })
    }

    
    
})

export const {reset} = authSlice.actions
export default authSlice.reducer;