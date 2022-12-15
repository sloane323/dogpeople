import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Modules/Login";

export default configureStore({
  reducer: {
    login: LoginReducer
  },
});
