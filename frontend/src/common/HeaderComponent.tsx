// import
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Header Area
export default function Header() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };
  return (
    <div className="App-header">
      <div className="header">
        <div className="back-area">
          <img
            className="back"
            src="../image/back.png"
            alt="backicon"
            onClick={Back}
          />
        </div>
        <div className="logo-area">
          <Link to="/">
            <img className="logo" src="../image/img.png" alt="logo" />
          </Link>
        </div>
        <div className="search-area">
          <Link to="/search">
            <img
              className="search"
              src="../image/search.png"
              alt="searchicon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
