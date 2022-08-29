import React from "react";
import banner from "../../image/img_5.png";

export default function Banner() {
  return (
    <div className="App-banner">
      <img className="banner-img" src={banner} alt="App-banner" />
    </div>
  );
}
