import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl } from "../../ApiBaseUrl/Api";

export const getAllSolutionList = createAsyncThunk("solutionList", async () => {
    try {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        const response = await fetch(`${BaseUrl}vendor/Get-Solutions`, requestOptions);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
});


export const myReducer = createSlice({
  name: "allSolutionList",
  initialState: {
    loading: false,
    solutionList: [],
  },
  reducers: {
    updateSelectSolutionList: (state, action) => {
      state.selectedSolutionId = action.payload;
    },
  },
  extraReducers: {
    [getAllSolutionList.pending]: (state) => {
      state.loading = true;
    },
    [getAllSolutionList.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.solutionList = payload; 
    },
   

  },


})

export const {
    updateSelectSolutionList
} = myReducer.actions;

export default myReducer.reducer;