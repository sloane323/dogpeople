

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  currentUser: localStorage.getItem("currentUser")
};
const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", action.payload);
    },
    LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});
export const { LOGIN, LOGOUT } = login.actions;
export default login.reducer;