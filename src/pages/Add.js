import React from "react";
import PostForm from "../components/PostForm";
import Footer from "../components/Footer";
import { HeaderDiv } from "../styles/style";

const Add = () => {
  return (
    <>
      <HeaderDiv>Add</HeaderDiv>
      <PostForm buttonText={"등록"} />
      <Footer />
    </>
  );
};

export default Add;
