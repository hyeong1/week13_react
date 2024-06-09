import React from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import Footer from "../components/Footer";
import { HeaderDiv } from "../styles/style";

const Edit = () => {
  const param = useParams();

  return (
    <>
      <HeaderDiv>Edit {param.id}</HeaderDiv>
      <PostForm buttonText={"수정"} />
      <Footer />
    </>
  );
};

export default Edit;
