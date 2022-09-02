// import
import React from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../common/HeaderComponent";
// ex_img
import ex_img from "../../image/img_6.png";

// Detail Area
export default function Statisticdetail() {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");
  return (
    <div className="App-staticdetail">
      <Header />
      <Card body className="staticdetail-body">
        <h2 className="detail-title">통계</h2>
        <hr className="title-body-between" />
        <div className="detail-body">
          <h3>{word}</h3>
          <div className="mean-table">
            <p>키워드에 대한 정의 1</p>
            <p>키워드에 대한 정의 2</p>
          </div>
          <div className="static-area">
            <h4>키워드 언급량 추이</h4>
            <img src={ex_img} alt="example_image" />
          </div>
        </div>
      </Card>
    </div>
  );
}
