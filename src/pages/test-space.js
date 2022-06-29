import { Link } from "gatsby";
import React from "react";

function TestSpacePage() {
  return (
    <main>
      <title>테스트</title>
      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/test-space">태스트-스페이스</Link>
      </div>
      <h1>테스트 스페이스 페이지 입니다/TEST SPACE PAGE</h1>
    </main>
  );
}

export default TestSpacePage;
