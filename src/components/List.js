import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import * as styled from "../styles/style";

const List = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.post);

  return (
    <>
      <styled.ListElem>
        <span>번호</span>
        <span>제목</span>
        <span>다시 보고 싶은 정도</span>
        <span>작성일자</span>
      </styled.ListElem>
      {posts.map((post) => (
        <styled.ListElem
          $isElem={true}
          onClick={() => {
            navigate(`detail/${post.id}`);
          }}
          key={post.id}
        >
          <span>{post.id}</span>
          <span>{post.title}</span>
          <span>
            {" "}
            <Rating
              initialRating={post.score}
              readonly={true}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
            />
          </span>
          <span>{post.write_at}</span>
        </styled.ListElem>
      ))}
    </>
  );
};

export default List;
