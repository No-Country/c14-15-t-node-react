import { createAsyncThunk } from "@reduxjs/toolkit";
import { greenIXApi } from "../../../axiosApi";

export const fetchCategories = createAsyncThunk("categories", async () => {
  try {
    const { data } = await greenIXApi.get(`/categories/getAll`).then((res) => res.data);
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
});

