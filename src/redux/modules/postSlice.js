import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    id: 0,
    post: [],
  },
  reducers: {
    updateId: (state, action) => {
      state.id = state.id + action.payload;
    },
    add: (state, action) => {
      state.post = [...state.post, action.payload];
    },
    remove: (state, action) => {
      console.log(action.payload);
      state.post = state.post.filter((p) => p.id != action.payload);
    },
    update: (state, action) => {
      state.post = [
        ...state.post.filter((p) => p.id < action.payload.id),
        action.payload,
        ...state.post.filter((p) => p.id > action.payload.id),
      ];
    },
  },
});

export default postSlice;
export const { updateId, add, remove, update } = postSlice.actions;
