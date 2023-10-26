import { createAsyncThunk } from "@reduxjs/toolkit";
import { greenIXApi } from "../../../axiosApi";


// /api/v1/products/categories/{category}?page=1
export const fetchCategory = createAsyncThunk("product", async (category,page=1) => {
  try {
    const { data } = await greenIXApi.get(`/products/categories/${category}?page=${page}`).then((res) => res.data);
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
});
