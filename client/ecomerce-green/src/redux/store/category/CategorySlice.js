
// /api/v1/categories/getAll
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { STATUS } from "../../../constants/Status";
import {  fetchCategories } from "./CategoryActionAction";
const base_url = "http://localhost:5000/";

const initialState = {
  status: "",
  loading: false,
  success: false,
  isError: false,
  categories: [],
  category: ""
};

const categorySlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchCategories.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.categories = action.payload || [];
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.loading = false;
          state.isError = true;
          state.products = [];
        })
        
        ;
      },
    });
  
  
export default categorySlice.reducer;