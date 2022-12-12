import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUserInfo: {},
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    GET_CURRENT_USER_INFO: (state, action) => {
      state.currentUserInfo = action.payload;
    },
  },
});

export const {
  GET_CURRENT_USER_INFO
} = user.actions;
export default user.reducer;