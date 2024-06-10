import React from "react";
import { FooterDiv, RowCenter } from "../styles/style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPrevPage } from "../redux/modules/postSlice";

const Footer = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const link = useSelector((state) => state.posts.prevPage);
  const handleBack = () => {
    if (
      link !== "/" &&
      window.confirm("나가시겠습니까? 수정한 내용은 저장되지 않습니다.")
    ) {
      navigator(link);
      dispatch(setPrevPage("/"));
    } else {
      navigator(link);
    }
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
