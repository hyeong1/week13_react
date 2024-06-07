import React, { useState } from "react";
import Rating from "react-rating";
import * as styled from "../styles/style";

const Add = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("baekjoon");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState(0);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleSubmit = () => {
    const post = {
      title: title,
      category: category,
      content: content,
      link: link,
      score: rating,
      userId: userId,
      userPw: userPw,
    };
    console.log(post);
  };

  return (
    <>
      <div>Add</div>
      <styled.Container>
        <div>
          <styled.Title>제목</styled.Title>
          <div>
            <styled.Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
            <styled.ContentInput
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div>
          <styled.Title>링크</styled.Title>
          <div>
            <styled.Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
        <div>
          <styled.Title>다시 풀고 싶은 정도</styled.Title>
          <Rating initialRating={rating} onChange={setRating} />
        </div>
        <div>
          <p>
            작성자 이름{" "}
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />{" "}
            비밀번호{" "}
            <input
              type="password"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button onClick={handleSubmit}>등록</button>
        </div>
      </styled.Container>
    </>
  );
};

export default Add;
