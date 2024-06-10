import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import * as styled from "../styles/style";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setPrevPage } from "../redux/modules/postSlice";
import { remove } from "../redux/modules/postSlice";

const Detail = () => {
  const param = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const pwRef = useRef();
  const [userPw, setUserPw] = useState("");

  // todo: postSlice에서 id 번호로 Detail/:id에 보여줘야 하는 객체 찾기
  const posts = useSelector((state) => state.posts.post);
  const detail = posts.find((p) => p.id == param.id);
  console.log(detail);

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
    dispatch(setPrevPage(`/detail/${param.id}`));
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
        <p>
          다시 보고 싶은 정도{" "}
          <Rating
            initialRating={detail.score}
            readonly={true}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
          />
        </p>

        <styled.ContentInput readonly="readonly">
          {detail.content}
        </styled.ContentInput>
        <p>
          비밀번호{" "}
          <input
            type="password"
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            ref={pwRef}
          />
          <styled.StButton onClick={handleEdit}>수정</styled.StButton>
          <styled.StButton onClick={handleDelete}>삭제</styled.StButton>
        </p>
      </styled.Container>
      <Footer />
    </>
  );
};

export default Detail;
