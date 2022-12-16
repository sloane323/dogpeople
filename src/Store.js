import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./modules1/Login";

export default configureStore({
  reducer: {
    login: LoginReducer
  },
});
