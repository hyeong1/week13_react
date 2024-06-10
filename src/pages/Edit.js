import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import Footer from "../components/Footer";
import { HeaderDiv } from "../styles/style";

const Edit = () => {
  const param = useParams();
  const posts = useSelector((state) => state.posts.post);
  const detail = posts.find((p) => p.id == param.id);

  return (
    <>
      <HeaderDiv>Edit {param.id}</HeaderDiv>
      <PostForm buttonText={"수정"} detail={detail} />
      <Footer />
    </>
  );
};

export default Edit;
