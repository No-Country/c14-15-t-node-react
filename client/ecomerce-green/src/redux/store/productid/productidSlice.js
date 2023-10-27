import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { STATUS } from "../../../constants/Status";
import {  getProduct } from "./productAction";
const base_url = "http://localhost:5000/";

const initialState = {
  status: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  product: {}
};


const productidSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
  
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload || {};
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.product = {};
      });
  },
});

export default productidSlice.reducer;