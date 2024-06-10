import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
`;

export const Title = styled.p`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 300px;
  max-lines: 10;
  resize: none;
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
`;

export const ListElem = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 2fr;
  padding: 10px;
  border-bottom: 1px solid lightgray;

  ${(props) =>
    props.$isElem &&
    css`
      &:hover {
        background-color: lightgray;
      }
    `}
`;

export const TitleCenter = styled.p`
  font-size: 40px;
  text-align: center;
`;

export const AlignRight = styled.div`
  display: flex;
  justify-content: right;
`;

export const Tag = styled.span`
  border-radius: 10px;
  color: white;
  padding: 5px;

  ${(props) => {
    console.log(props.$category);
    if (props.$category === "baekjoon") {
      return css`
        background-color: #2980b9;
      `;
    } else if (props.$category === "programmers") {
      return css`
        background-color: #1e2a3c;
      `;
    } else {
      return css`
        background-color: #ffa116;
      `;
    }
  }}
`;

export const LinkText = styled.span`
  margin-left: 20px;
  &:hover {
    color: blue;
  }
`;

export const HeaderDiv = styled.div`
  padding: 20px;
`;

export const FooterDiv = styled.div`
  border-top: 0.5px solid lightgrey;
  padding: 20px;
  color: gray;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

export const RowCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StButton = styled.button`
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 60px;
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;

  &:hover {
    background-color: gray;
    color: #f0f0f0;
  }
`;
