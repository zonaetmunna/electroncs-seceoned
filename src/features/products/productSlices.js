import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    isLoading:false,
    isError:false,
    error:"",
};

// asyncThunk
const getProducts=createAsyncThunk("products/getProducts",async ()=>{
    const res=await fetch("https://electronics-backend-zonaetmunna.vercel.app/api/products/");
    const data=res.json();
    return data;

});

export const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.isLoading=true;
            state.isError=false
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.isLoading=false;
            state.isError=false
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.products=[];
            state.isLoading=false;
            state.isError=true;
            state.error=action.error.message;
        })
        

    },

});

export default productsSlice.reducer;
