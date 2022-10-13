// import
import React from "react";

// Footer Area
export default function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer>
      <div className="inner">
        <ul className="menu">
          <li>
            <a href="https://github.com/SNS-bumineun/SNSAnalysis">
              SNS_Analysis
            </a>
          </li>
          <li>
            <a href="https://github.com/l0u0h0/2022_capstone">
              SNS상에서 자주 쓰이는 은어 분석 사이트 프로젝트
            </a>
          </li>
        </ul>
        <div className="info">
          <span>백석대학교 컴퓨터공학부</span>
          <span>2022_2학기 캡스톤 디자인</span>
        </div>
        <p className="copyright">
          &copy; <span className="this-year">{thisYear}</span> Bum-In-Eun. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
