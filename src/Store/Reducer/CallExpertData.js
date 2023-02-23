import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const myReducer = createSlice({
    name: "callExpert",
    initialState: {
        loading: false,
        CallExpertData: {
            Designation: "",
            Query:"",
            Phone: "",
            CompanyEmail:"",
            Name: "",
            CompanySize: "",
            CompanyIndustry: [],
            Solution:"",
          }
    },
    reducers: {
        updateCallExpertData: (state, action) => {
            state.CallExpertData = { ...state.CallExpertData, ...action.payload };
        },
        clearCallExpertData: (state, action) => {
            state.CallExpertData = {
                Designation: "",
                Query:"",
                Phone: "",
                CompanyEmail:"",
                Name: "",
                CompanySize: "",
                CompanyIndustry: [],
                Solution:"",
              };
        }
    },
    extraReducers: {
    },
})

export const {
    updateCallExpertData,
    clearCallExpertData
} = myReducer.actions;

export default myReducer.reducer;