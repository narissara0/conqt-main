import {createSlice } from "@reduxjs/toolkit";

export const myReducer = createSlice({
  name: "conqt",
  initialState: {
    AllProducts: [],
  },
  reducers: {
    updatedAllProductsData: (state, action) => {
      // console.log("*****in the store of all products", action);
      // console.log(action.payload, "action.payload in the reducer of all products");
      state.AllProducts = action.payload;
    },
  },
  extraReducers: {},
});
export const { updatedAllProductsData } = myReducer.actions;

export default myReducer.reducer;
