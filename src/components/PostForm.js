import React, { useState, useRef } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import * as styled from "../styles/style";
import { useDispatch } from "react-redux";
import { add } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";

const PostForm = (props) => {
  console.log(props.data); // Edit에서 보낸 id가 있으면 redux에서 찾기 + 수정할 떄 redux에서도 수정 + 수정 api요청
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef("");
  const contentRef = useRef("");
  const linkRef = useRef("");
  const idRef = useRef("");
  const pwRef = useRef("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("baekjoon");

  const validData = () => {
    console.log(titleRef.current.value.length);
    if (titleRef.current.value.length === 0) {
      alert("제목을 입력하세요.");
      titleRef.current.focus();
    } else if (titleRef.current.value.length > 10) {
      alert("제목이 너무 길어요.");
      titleRef.current.focus();
    } else if (contentRef.current.value > 9096) {
      alert("내용이 너무 길어요.");
      contentRef.current.focus();
    } else if (linkRef.current.value) {
    }
  };

  const handleSubmit = () => {
    validData();
    const post = {
      title: titleRef.current.value,
      category: category,
      content: contentRef.current.value,
      link: linkRef.current.value,
      score: rating,
      userId: idRef.current.value,
      userPw: pwRef.current.value,
    };
    console.log(post);
    dispatch(add(post));
    navigate("/");
    // Add에서 submit 요청보낼 때 PUT인지 POST인지 체크하기 -api쪽에서
  };
  return (
    <>
      <styled.Container>
        <div>
          <styled.Title>제목</styled.Title>
          <div>
            <styled.Input ref={titleRef} />
          </div>
        </div>
        <div>
          <styled.Title>카테고리</styled.Title>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="baekjoon">백준</option>
              <option value="programmers">프로그래머스</option>
              <option value="leetcode">LeetCode</option>
            </select>
          </div>
        </div>
        <div>
          <styled.Title>내용</styled.Title>
          <div>
            <styled.ContentInput ref={contentRef} />
          </div>
        </div>
        <div>
          <styled.Title>링크</styled.Title>
          <div>
            <styled.Input ref={linkRef} />
          </div>
        </div>
        <div>
          <styled.Title>
            다시 풀고 싶은 정도{" "}
            <Rating
              initialRating={rating}
              onChange={setRating}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
            />
          </styled.Title>
        </div>
        <div>
          <p>
            작성자 이름 <input type="text" ref={idRef} /> 비밀번호{" "}
            <input type="password" ref={pwRef} />
          </p>
        </div>
        <styled.AlignRight>
          <button onClick={handleSubmit}>{props.buttonText}</button>
        </styled.AlignRight>
      </styled.Container>
    </>
  );
};

export default PostForm;
