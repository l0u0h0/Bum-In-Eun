// import
import React, { useState } from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
// testimg
import staticimg from "../image/img_6.png";

// Search main Component
export default function SearchComponent() {
  const [searchstate, setSearchstate] = useState(0);
  const [search, setSearch] = useState({
    data: "검색어를 입력해주세요.",
    test: {
      crime: "한마디로 좋은 손님",
      word: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
      static: staticimg,
    },
  });
  const [ref, setRef] = useState(null);

  return (
    <div className="App-search">
      <Header />
      <div className="search-body">
        <InputGroup className="mb-3">
          <Button
            as="input"
            type="submit"
            className="search-btn"
            variant="outline-secondary"
            id="button-addon1"
            onClick={Searchstate}
            value="검색"
          />
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="search-addon"
            placeholder={search.data}
            className="search-text"
            ref={setRef}
            type="input"
          />
        </InputGroup>
        {searchstate === 1 && <Searchresult data={search} />}
      </div>
      <Banner />
    </div>
  );

  function Searchstate() {
    if (searchstate === 1) {
      setSearchstate(0);
    }
    if (searchstate === 0) {
      setSearch({
        data: ref.value,
        test: search.test,
      });
      setSearchstate(1);
    }
  }
}

// Search result Component
function Searchresult(search) {
  const data = search.data.test;
  return (
    <div className="search-result">
      <div className="result-crime">
        <h2>범죄 사전</h2>
        <p>{data.crime}</p>
      </div>
      <div className="result-word">
        <h2>은어 사전</h2>
        {data.word &&
          data.word.map((text, i) => <p key={`mean_${i}`}>{text}</p>)}
      </div>
      <div className="result-static">
        <h2>통계 추세</h2>
        <img src={data.static} alt="static-result" />
      </div>
    </div>
  );
}
