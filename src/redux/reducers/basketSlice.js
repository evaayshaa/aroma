import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getBasketThunk=createAsyncThunk('get/basket',async()=>{
    const res=await axios.get('https://681151cf3ac96f7119a43482.mockapi.io/basket')
    return res.data
})
export const postBasketThunk=createAsyncThunk('post/basket',async(data)=>{
    const res=await axios.post('https://681151cf3ac96f7119a43482.mockapi.io/basket',data)
    return res.data
})
export const deleteBasketThunk=createAsyncThunk('delete/basket',async(id)=>{
    const res=await axios.delete(`https://681151cf3ac96f7119a43482.mockapi.io/basket/${id}`)
    return id
})

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: []
    },
    extraReducers: builder => {
        builder
            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.basket = action.payload
                state.loading = false
            })
            .addCase(getBasketThunk.pending, (state, action) => {

                state.loading = true
            })
            .addCase(getBasketThunk.rejected, (state, action) => {
                state.error = action.error
                state.loading = false
            })



            .addCase(postBasketThunk.fulfilled, (state, action) => {
                state.basket.push(action.payload)
                state.loading = false
            })
            .addCase(postBasketThunk.pending, (state, action) => {

                state.loading = true
            })
            .addCase(postBasketThunk.rejected, (state, action) => {
                state.error = action.error
                state.loading = false
            })

            
            .addCase(deleteBasketThunk.fulfilled, (state, action) => {
                state.basket=state.basket.filter((item)=>item.id !== action.payload)
                state.loading = false
            })
            .addCase(deleteBasketThunk.pending, (state, action) => {

                state.loading = true
            })
            .addCase(deleteBasketThunk.rejected, (state, action) => {
                state.error = action.error
                state.loading = false
            })

    }
})
export default basketSlice.reducer