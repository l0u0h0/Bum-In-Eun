import React from "react";
import Header from "../common/HeaderComponent";
import Banner from "../common/BannerComponent";
import { Link } from "react-router-dom";

export default function Crimemain() {
  return (
    <div className="App-crimemain">
      <Header />
      <div className="crimemain-body">
        <div className="category-area">
          <Link to="/crimeresult?category=gambling">
            <button className="btn btn--link category">도박</button>
          </Link>
          <Link to="/crimeresult?category=voicefishing">
            <button className="btn btn--link category">보이스 피싱</button>
          </Link>
          <Link to="/crimeresult?category=drug">
            <button className="btn btn--link category">마약</button>
          </Link>
          <Link to="/crimeresult?category=gendercrime">
            <button className="btn btn--link category">성범죄</button>
          </Link>
        </div>
      </div>
      <Banner />
    </div>
  );
}
