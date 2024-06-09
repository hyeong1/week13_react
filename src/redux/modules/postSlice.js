import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    id: 1,
    post: [
      {
        id: 1,
        title: "백준 1012",
        content: "백준 1012 유기농 배추",
        link: "https://www.acmicpc.net/problem/1012",
        category: "baekjoon",
        score: 3,
        password: "1234",
        write_at: "2024-06-10",
      },
    ],
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
      console.log(action.payload);
      state.post = [
        ...state.post.filter((p) => p.id != action.payload.id),
        action.payload,
      ];
    },
  },
});

export default postSlice;
export const { init, updateId, add, remove, update } = postSlice.actions;
