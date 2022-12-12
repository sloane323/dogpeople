import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./modules/Login";

export default configureStore({
  reducer: {
    login: LoginReducer,
  },
});
