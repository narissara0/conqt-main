import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const myReducer = createSlice({
  name: "conqt",
  initialState: {
    homepage: {},
  },
  reducers: {
    updatedDataHomePage: (state, action) => {
      // console.log("*****in the store", action);
      // console.log(action.payload, "action.payload in the reducer");
      state.homepage = action.payload;
    },
  },
  extraReducers: {},
});
export const { updatedDataHomePage } = myReducer.actions;

export default myReducer.reducer;
