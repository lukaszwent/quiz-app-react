import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "" },
  reducers: {
    addUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
