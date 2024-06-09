import React from "react";
import List from "../components/List";
import * as styled from "../styles/style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <styled.HeaderDiv>Home</styled.HeaderDiv>
      <styled.Container>
        <styled.TitleCenter>알고리즘 복습하기</styled.TitleCenter>
        <styled.AlignRight>
          <Link to={`add`}>
            <button>추가</button>
          </Link>
        </styled.AlignRight>
        <List />
      </styled.Container>
    </>
  );
};

export default Home;
