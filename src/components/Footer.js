import React from "react";
import { FooterDiv, RowCenter } from "../styles/style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigator = useNavigate();
  const handleBack = () => {
    navigator(-1);
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
