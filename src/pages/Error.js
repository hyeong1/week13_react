import React from "react";

const Error = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "50px" }}>존재하지 않는 페이지입니다.</p>
          <p style={{ textAlign: "center" }}>
            <a href="/">돌아가기</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
