import React from "react";
import { FooterDiv, RowCenter } from "../styles/style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const Footer = () => {
  const param = useParams();
  const navigator = useNavigate();
  const link = param.id !== undefined ? `/detail/${param.id}` : "/"; // 수정하다 돌아가는건 다시 detail로
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

export default Footer;
