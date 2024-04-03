

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    first: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirst: (state, action) => {
      state.first = action.payload;
    },
  },
});

export const { setName, setEmail, setFirst } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
