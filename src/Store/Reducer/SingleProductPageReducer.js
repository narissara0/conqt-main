import { createSlice } from "@reduxjs/toolkit";

export const myReducer = createSlice({
  name: "conqt",
  initialState: {
    SingleProduct: [],
  },
  reducers: {
    updatedSingleProductsData: (state, action) => {
      // console.log("*****in the store of SingleProduct", action);
      // console.log(action.payload, "action.payload in the reducer of SingleProduct");
      state.SingleProduct = action.payload;
    },
  },
  extraReducers: {},
});
export const { updatedSingleProductsData } = myReducer.actions;

export default myReducer.reducer;