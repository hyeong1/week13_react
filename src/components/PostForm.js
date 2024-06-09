import React, { useState, useRef, useEffect } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import * as styled from "../styles/style";
import { useDispatch, useSelector } from "react-redux";
import { updateId, add, update } from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { createDate } from "../utils/Format";

const PostForm = (props) => {
  console.log(props.data); // Edit에서 보낸 id가 있으면 redux에서 찾기 + 수정할 떄 redux에서도 수정 + 수정 api요청
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.post);
  const maxId = useSelector((state) => state.posts.id);
  const param = useParams();
  const detail = posts.find((p) => p.id == param.id);

  const titleRef = useRef("");
  const contentRef = useRef("");
  const linkRef = useRef("");
  const pwRef = useRef("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("baekjoon");

  useEffect(() => {
    if (detail !== undefined) {
      setRating(detail.score);
    }
  }, []);

  const validData = () => {
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
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validData()) {
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
    if (!validData()) {
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
      console.log(post);
      dispatch(update(post));
      navigate(`/detail/${param.id}`);
    }
  };

  return (
    <>
      {detail !== undefined ? (
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
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {detail.category === "baekjoon" ? (
                  <option value="baekjoon " selected>
                    백준
                  </option>
                ) : (
                  <option value="baekjoon">백준</option>
                )}
                {detail.category === "programmers" ? (
                  <option value="programmers " selected>
                    프로그래머스
                  </option>
                ) : (
                  <option value="programmers">프로그래머스</option>
                )}
                {detail.category === "leetcode" ? (
                  <option value="leetcode " selected>
                    LeetCode
                  </option>
                ) : (
                  <option value="leetcode">LeetCode</option>
                )}
              </select>
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
            <p>
              비밀번호 <input type="password" ref={pwRef} disabled />
            </p>
          </div>
          <styled.AlignRight>
            <button onClick={handleEdit}>{props.buttonText}</button>
          </styled.AlignRight>
        </styled.Container>
      ) : (
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
              비밀번호 <input type="password" ref={pwRef} />
            </p>
          </div>
          <styled.AlignRight>
            <button onClick={handleSubmit}>{props.buttonText}</button>
          </styled.AlignRight>
        </styled.Container>
      )}
    </>
  );
};

export default PostForm;
