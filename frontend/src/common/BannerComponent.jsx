// import
import React from "react";
// Banner_img
import banner from "../image/img_5.png";

// Banner Area
export default function Banner() {
  return (
    <div className="App-banner">
      <img className="banner-img" src={banner} alt="App-banner" />
    </div>
  );
}
