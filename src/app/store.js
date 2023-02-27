import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartSlice from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
import filterSlice from '../features/filter/filterSlice';
import { productsSlice } from '../features/products/productSlices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartSlice,
    filter:filterSlice,
    products:productsSlice,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});
