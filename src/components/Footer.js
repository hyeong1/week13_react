import React from "react";
import { FooterDiv, RowCenter } from "../styles/style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const navigator = useNavigate();
  const link = useSelector((state) => state.posts.prevPage);
  const handleBack = () => {
    navigator(link);
  };

  return (
    <FooterDiv>
      <RowCenter onClick={handleBack}>
        <IoIosArrowBack /> 돌아가기
      </RowCenter>
    </FooterDiv>
  );
};

export default React.memo(Footer);
