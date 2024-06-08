import React from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import Footer from "../components/Footer";
import { HeaderDiv } from "styles/style";

const Edit = () => {
  const param = useParams();
  // Edit로 이동하려면 Detail에서 아이디, 비밀번호 체크해야 함.
  // PostForm으로 id보내주기
  // PostForm 컴포넌트 가져와서 input 안에 데이터 넣어주기
  const testDetail = {
    title: "test detail 1",
    content: "test detail 1",
    link: "https://leetcode.com/problems/climbing-stairs/description/",
    category: "leetcode",
    score: "4.0",
    author: "user01",
    write_at: "2024-06-07",
  };

  return (
    <>
      <HeaderDiv>Edit {param.id}</HeaderDiv>
      <PostForm buttonText={"수정"} data={testDetail} />
      <Footer />
    </>
  );
};

export default Edit;
