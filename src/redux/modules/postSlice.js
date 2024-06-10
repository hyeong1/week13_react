import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    id: 0,
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
      {
        id: 2,
        title: "리트코드 3",
        content: "리트코드 3 Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        category: "leetcode",
        score: 4,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 3,
        title: "프로그래머스 -2016년",
        content: '프로그래머스 "2016년"',
        link: "https://school.programmers.co.kr/learn/courses/30/lessons/12901",
        category: "programmers",
        score: 2,
        password: "1234",
        write_at: "2024-06-10",
      },
    ],
    prevPage: "/",
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
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    },
  },
});

export default postSlice;
export const { updateId, add, remove, update, setPrevPage } = postSlice.actions;
