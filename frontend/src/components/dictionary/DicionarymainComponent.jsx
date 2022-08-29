import React from "react";
import { Card } from "react-bootstrap";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";

export default function DictionaryMain() {
  return (
    <div className="App-dictionarymain">
      <Header />
      <Card body className="dictionarymain-body">
        <Card body className="first-table">
          <h3>조회가 많았던 키워드</h3>
        </Card>
        <Card body className="second-table">
          <h3>추천이 많았던 키워드</h3>
        </Card>
      </Card>
      <Banner />
    </div>
  );
}
