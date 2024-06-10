import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    id: 10,
    prevPage: "/",
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
      {
        id: 4,
        title: "프로그래머스 추억점수 문제",
        content: "프로그래머스 추억점수 문제",
        link: "https://school.programmers.co.kr/learn/courses/30/lessons/176963",
        category: "programmers",
        score: 3,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 5,
        title: "백준 1094",
        content: "백준 1012 막대기",
        link: "https://www.acmicpc.net/problem/1094",
        category: "baekjoon",
        score: 5,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 6,
        title: "백준 1202 보석 도둑",
        content: "백준 1202 보석 도둑 -그리디",
        link: "https://www.acmicpc.net/problem/1202",
        category: "baekjoon",
        score: 5,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 7,
        title: "리트코드 15번(3 Sum)",
        content: "Two pointer, Sorting 문제입니다.",
        link: "https://leetcode.com/problems/3sum/",
        category: "leetcode",
        score: 4,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 8,
        title: "Trapping rain water",
        content: "스택 문제",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        category: "leetcode",
        score: 5,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 9,
        title: "로또 최고 순위, 최저 순위",
        content: "...",
        link: "https://school.programmers.co.kr/learn/courses/30/lessons/77484",
        category: "programmers",
        score: 2,
        password: "1234",
        write_at: "2024-06-10",
      },
      {
        id: 10,
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
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
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
export const { updateId, setPrevPage, add, remove, update } = postSlice.actions;
