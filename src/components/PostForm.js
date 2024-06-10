import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import * as styled from "../styles/style";
import { createDate } from "../utils/Format";
import { updateId, add, update, setPrevPage } from "../redux/modules/postSlice";

const PostForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const maxId = useSelector((state) => state.posts.id);
  const param = useParams();
  const detail = {
    id: 0,
    title: "",
    content: "",
    link: "",
    category: "",
    score: 0,
    password: "",
    write_at: "",
  };
  if (props.detail !== undefined) {
    detail.id = props.detail.id;
    detail.title = props.detail.title;
    detail.content = props.detail.content;
    detail.link = props.detail.link;
    detail.category = props.detail.category;
    detail.score = props.detail.score;
    detail.password = props.detail.password;
    detail.write_at = props.detail.write_at;
  }

  const titleRef = useRef("");
  const contentRef = useRef("");
  const linkRef = useRef("");
  const pwRef = useRef("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("baekjoon");

  useEffect(() => {
    if (detail !== undefined) {
      setRating(detail.score);
      setCategory(detail.category);
    }
  }, []);

  const validData = (isEdit) => {
    const RegExp =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (titleRef.current.value.length === 0) {
      alert("제목을 입력하세요.");
      titleRef.current.focus();
      return false;
    } else if (titleRef.current.value.length > 30) {
      alert("제목이 너무 길어요.");
      titleRef.current.focus();
      return false;
    } else if (contentRef.current.value.length > 9096) {
      alert("내용이 너무 길어요.");
      contentRef.current.focus();
      return false;
    } else if (
      contentRef.current.value.length === 0 ||
      contentRef.current.value.trim() === 0
    ) {
      alert("내용을 입력하세요.");
      contentRef.current.focus();
      return false;
    } else if (
      linkRef.current.value.length === 0 ||
      linkRef.current.value.trim() === 0
    ) {
      alert("문제 링크를 첨부해주세요.");
      linkRef.current.focus();
      return false;
    } else if (!RegExp.test(linkRef.current.value)) {
      alert("URL 형식으로 입력해주세요.");
      linkRef.current.focus();
      return false;
    } else if (
      !isEdit &&
      (pwRef.current.value.length === 0 || pwRef.current.value.trim() === 0)
    ) {
      alert("비밀번호를 입력하세요.");
      pwRef.current.focus();
      return false;
    }
    if (
      !isEdit &&
      window.confirm(
        "카테고리와 비밀번호는 수정할 수 없습니다. 등록하시겠습니까?"
      )
    ) {
      return true;
    }
    if (isEdit) {
      return true;
    }
  };

  const handleSubmit = () => {
    if (!validData(false)) {
      return;
    }

    dispatch(updateId(1));
    const newPost = {
      id: maxId + 1,
      title: titleRef.current.value,
      content: contentRef.current.value,
      link: linkRef.current.value,
      category: category,
      score: rating,
      password: pwRef.current.value,
      write_at: createDate(),
    };
    dispatch(add(newPost));
    navigate("/");
  };

  const handleEdit = () => {
    if (!validData(true)) {
      return;
    }
    if (window.confirm("수정하시겠습니까?")) {
      const post = {
        id: param.id,
        title: titleRef.current.value,
        category: category,
        content: contentRef.current.value,
        link: linkRef.current.value,
        score: rating,
        password: detail.password,
        write_at: detail.write_at,
      };
      dispatch(update(post));
      dispatch(setPrevPage("/"));
      navigate(`/detail/${param.id}`);
    }
  };

  return (
    <>
      <styled.Container>
        <div>
          <styled.Title>제목</styled.Title>
          <div>
            <styled.Input ref={titleRef} defaultValue={detail.title} />
          </div>
        </div>
        <div>
          <styled.Title>카테고리</styled.Title>
          <div>
            {props.detail !== undefined ? (
              <styled.Tag $category={detail.category}>
                {detail.category}
              </styled.Tag>
            ) : (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="baekjoon">백준</option>
                <option value="programmers">프로그래머스</option>
                <option value="leetcode">LeetCode</option>
              </select>
            )}
          </div>
        </div>
        <div>
          <styled.Title>내용</styled.Title>
          <div>
            <styled.ContentInput
              ref={contentRef}
              defaultValue={detail.content}
            />
          </div>
        </div>
        <div>
          <styled.Title>링크</styled.Title>
          <div>
            <styled.Input ref={linkRef} defaultValue={detail.link} />
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
          {props.buttonText === "등록" && (
            <p>
              비밀번호 <input type="password" ref={pwRef} />
            </p>
          )}
        </div>
        <styled.AlignRight>
          <styled.StButton
            onClick={props.buttonText === "등록" ? handleSubmit : handleEdit}
          >
            {props.buttonText}
          </styled.StButton>
        </styled.AlignRight>
      </styled.Container>
    </>
  );
};

export default PostForm;
