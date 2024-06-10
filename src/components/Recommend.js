import React from "react";
import { useSelector } from "react-redux";
import * as styled from "../styles/style";

const Recommend = () => {
  const posts = useSelector((state) => state.posts.post);
  const filterPost = posts.filter((p) => p.score > 2);
  const random = filterPost[Math.floor(Math.random() * filterPost.length)];

  return (
    <>
      <styled.RecommendBox>
        <styled.Title>이 문제 어때요?</styled.Title>
        <span>{random.title}</span>
        <styled.LinkText onClick={() => window.open(random.link)}>
          {random.link}
        </styled.LinkText>
      </styled.RecommendBox>
    </>
  );
};

export default Recommend;
