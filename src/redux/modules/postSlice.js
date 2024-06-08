import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    post: [],
  },
  reducers: {
    init: (state, action) => {
      state.post = [action.payload];
    },
    add: (state, action) => {
      console.log(action);
      state.post = [...state.post, action.payload];
      console.log(state.post);
    },
    remove: (state, action) => {
      state.post = action.payload;
    },
  },
});

export default postSlice;
export const { init, add, remove } = postSlice.actions;
