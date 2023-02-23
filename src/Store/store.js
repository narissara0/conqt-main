import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import HomePageReducer from "./Reducer/HomePageReducer";
import AllProductsReducer from "./Reducer/AllProductsReducer";
import SingleProductPageReducer from "./Reducer/SingleProductPageReducer";
import GetAllSolutionList from "./Reducer/GetAllSolutionList";
import CallExpertData from "./Reducer/CallExpertData";


const reducers = combineReducers({
  conqt: HomePageReducer,
  allProducts:AllProductsReducer,
  singleProductDetails:SingleProductPageReducer,
  allSolutionList: GetAllSolutionList,
  callExpert : CallExpertData,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  //  devTools:false,
  devTools: process.env.NODE_ENV !== "production",
});
