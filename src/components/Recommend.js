import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as styled from "../styles/style";

const Recommend = () => {
  const posts = useSelector((state) => state.posts.post);
  const random = posts[Math.floor(Math.random() * posts.length)];
  useEffect(() => {
    console.log(random.title);
  });
  return (
    <>
      <styled.RecommendBox>
        <styled.Title>이 문제 어때요?</styled.Title>
        <span>{random.title}</span>
        <styled.LinkText>{random.link}</styled.LinkText>
      </styled.RecommendBox>
    </>
  );
};

export default Recommend;
