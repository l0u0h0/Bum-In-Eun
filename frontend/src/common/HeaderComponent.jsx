// import
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Header_img
import back from "../image/back.png";
import logo from "../image/img.png";
import search from "../image/search.png";

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
          <img className="back" src={back} alt="backicon" onClick={Back} />
        </div>
        <div className="logo-area">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="search-area">
          <Link to="/search">
            <img className="search" src={search} alt="searchicon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
