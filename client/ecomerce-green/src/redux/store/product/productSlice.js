import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { STATUS } from "../../../constants/Status";
import { fetchProducts } from "./productAction";
const base_url = "http://localhost:5000/";

const initialState = {
  status: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  products: [],
};




const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload || [];
        
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.products = [];
      });
  },
});



export default productSlice.reducer;