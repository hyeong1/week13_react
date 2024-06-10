import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { remove } from "../redux/modules/postSlice";
import * as styled from "../styles/style";
import Footer from "../components/Footer";

const Detail = () => {
  const param = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.post);
  const detail = posts.find((p) => p.id == param.id);
  const pwRef = useRef();
  const [userPw, setUserPw] = useState("");

  const validUser = () => {
    if (userPw === "" || userPw.trim().length < 1) {
      alert("비밀번호를 입력하세요.");
      pwRef.current.focus();
      return false;
    } else if (userPw !== detail.password) {
      alert("비밀번호가 틀립니다.");
      pwRef.current.focus();
      return false;
    }
    return true;
  };

  const handleEdit = () => {
    if (!validUser()) {
      return false;
    }
    navigator(`/edit/${param.id}`);
  };

  const handleDelete = () => {
    if (!validUser()) {
      return false;
    }
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(remove(param.id));
      navigator("/");
    }
    return;
  };

  return (
    <>
      <styled.HeaderDiv>Detail {param.id}</styled.HeaderDiv>
      <styled.Container>
        <styled.Title>{detail.title}</styled.Title>
        <styled.Title>{detail.write_at}</styled.Title>
        <styled.Title>
          <styled.Tag $category={detail.category}>{detail.category}</styled.Tag>
          <styled.LinkText onClick={() => window.open(detail.link)}>
            {detail.link}
          </styled.LinkText>
        </styled.Title>
        <styled.Title>
          다시 보고 싶은 정도{" "}
          <Rating
            initialRating={detail.score}
            readonly={true}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
          />
        </styled.Title>
        <styled.ContentInput readonly="readOnly">
          {detail.content}
        </styled.ContentInput>
        <styled.Title>
          비밀번호{" "}
          <input
            type="password"
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            ref={pwRef}
          />
          <styled.StButton onClick={handleEdit}>수정</styled.StButton>
          <styled.StButton onClick={handleDelete}>삭제</styled.StButton>
        </styled.Title>
      </styled.Container>
      <Footer />
    </>
  );
};

export default Detail;
