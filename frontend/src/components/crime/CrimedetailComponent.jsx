import React from "react";
import { Card } from "react-bootstrap";
import Header from "../common/HeaderComponent";
import ex_img from "../../image/camera.png";
import { useLocation } from "react-router-dom";

export default function Crimedetail() {
  const location = new URLSearchParams(useLocation().search);
  const category = location.get("category");
  const word = location.get("word");
  const mean = location.get("mean");
  return (
    <div className="App-crimedetail">
      <Header />
      <Card body className="crimedetail-body">
        <h2 className="detail-title">{word}</h2>
        <hr className="title-body-between" />
        <div className="detail-body">
          <h3>카테고리 - {category}</h3>
          <img src={ex_img} alt="example_image" />
          <p>{mean}</p>
        </div>
      </Card>
    </div>
  );
}
