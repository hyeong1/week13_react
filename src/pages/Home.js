import React from "react";
import List from "../components/List";
import * as styled from "../styles/style";
import { Link } from "react-router-dom";
import Recommend from "../components/Recommend";

const Home = () => {
  return (
    <>
      <styled.HeaderDiv>Home</styled.HeaderDiv>
      <styled.Container>
        <styled.TitleCenter>알고리즘 복습하기</styled.TitleCenter>
        <Recommend />
        <styled.AlignRight>
          <Link to={`add`}>
            <styled.StButton>추가</styled.StButton>
          </Link>
        </styled.AlignRight>
        <List />
      </styled.Container>
    </>
  );
};

export default Home;
