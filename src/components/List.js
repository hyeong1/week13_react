import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as styled from "../styles/style";
import { init } from "../redux/modules/postSlice";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  // todo: useEffect로 list 가져올 때 한 번만 db에서 리스트 정보 가져오기 + store에 저장하기(dispatch(init))
  useEffect(() => {
    // dp api 연결
    const posts = [];
    dispatch(init(posts));
  }, []);

  const testPosts = [
    {
      id: 1,
      title: "테스트용 1",
      score: "3.5",
      author: "user01",
      write_at: "2024-06-07",
    },
    {
      id: 2,
      title: "테스트용 2",
      score: "4.5",
      author: "user02",
      write_at: "2024-06-07",
    },
    {
      id: 3,
      title: "테스트용 3",
      score: "3",
      author: "user03",
      write_at: "2024-06-07",
    },
  ];
  return (
    <>
      <styled.ListElem>
        <span>번호</span>
        <span>제목</span>
        <span>rating</span>
        <span>작성자</span>
        <span>작성일자</span>
      </styled.ListElem>
      {testPosts.map((post) => (
        <styled.ListElem>
          <span>{post.id}</span>
          <Link to={`detail/${post.id}`} style={{ textDecoration: "none" }}>
            <span>{post.title}</span>
          </Link>
          <span>{post.score}</span>
          <span>{post.author}</span>
          <span>{post.write_at}</span>
        </styled.ListElem>
      ))}
    </>
  );
};

export default List;
