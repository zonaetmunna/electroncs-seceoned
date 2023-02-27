import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProducts, fetchProduct, postProducts } from "./productsApi";

const initialState={
    products:[],
    postSuccess:false,
    deleteSuccess:false,
    isLoading:false,
    isError:false,
    error:"",
};

// asyncThunk
export const getProducts=createAsyncThunk("products/getProducts",async ()=>{
   const products= fetchProduct();
   return products;
});
export const postProduct=createAsyncThunk("product/postProduct",async (data)=>{
    const product=postProducts(data);
    return product;
});
export const deleteProduct=createAsyncThunk("product/deleteProducts",async(id)=>{
    const product=deleteProducts(id);
});



// product slice
export const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        togglePostSuccess:(state)=>{
            state.postSuccess=false;
        },
        toggleDeleteSuccess:(state)=>{
            state.deleteSuccess=false;
        }
    },
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
        .addCase(postProduct.pending,(state,action)=>{
            state.postSuccess=false;
            state.isLoading=true;
            state.isError=false
        })
        .addCase(postProduct.fulfilled,(state,action)=>{
            state.postSuccess=true;
            state.isLoading=false;
            state.isError=false
        })
        .addCase(postProduct.rejected,(state,action)=>{
            state.products=[];
            state.postSuccess=false;
            state.isLoading=false;
            state.isError=true;
            state.error=action.error.message;
        })
        .addCase(deleteProduct.pending,(state,action)=>{
            state.deleteSuccess=false;
            state.isLoading=false;
            state.isError=true;
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.deleteSuccess=true;
            state.isLoading=false;
            state.isError=true;
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.deleteSuccess=false;
        })
    
        

    },

});
export const {toggleDeleteSuccess,togglePostSuccess}=productsSlice.actions;
export default productsSlice.reducer;
