import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductThunk=createAsyncThunk('get/product',async()=>{
    const res=await axios.get('https://dummyjson.com/products')
    return res.data.products
})

export const productSlice=createSlice({
    name:'product',
    initialState:{
        product:[]
    },

    extraReducers:builder=>{
        builder 
        .addCase(getProductThunk.fulfilled,(state,action)=>{
            state.product=action.payload
            state.loading=false
        })
        .addCase(getProductThunk.pending,(state,action)=>{
           
            state.loading=true
        })
        .addCase(getProductThunk.rejected,(state,action)=>{
           state.error=action.error
            state.loading=false
        })
    }
})

export default productSlice.reducer