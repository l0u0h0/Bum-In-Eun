// import
import React, { useState, useRef } from "react";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";
// img import
import static_img from "../image/img_6.png";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SearchState {
  data: string | null;
  originData: string | undefined;
  test: {
    crime: {
      word: string;
      category: string;
    };
    word: [any, any];
    static: string;
  };
}

// Search main Component
export default function SearchComponent() {
  const [searchstate, setSearchstate] = useState(0);
  const [search, setSearch] = useState<SearchState>({
    data: "검색어를 입력해주세요.",
    originData: "",
    test: {
      crime: { word: "한마디로 좋은 손님", category: "도박" },
      word: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
      static: static_img,
    },
  });

  const ref = useRef(null);

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
            placeholder={search.originData}
            className="search-text"
            ref={ref}
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
        data: ref.current,
        originData: search.data?.toString(),
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
      <Link
        to={`/crime/detail?category=${data.crime.category}&word=${search.data.data}&mean=${data.crime.word}`}
      >
        <div className="result-crime">
          <h2>범죄 사전</h2>
          <p>카테고리 - {data.crime.category}</p>
          <p>{data.crime.word}</p>
        </div>
      </Link>
      <Link to={`/dictionary/detail?word=${search.data.data}`}>
        <div className="result-word">
          <h2>은어 사전</h2>
          {data.word &&
            data.word.map((text, i) => <p key={`mean_${i}`}>{text}</p>)}
        </div>
      </Link>
      <Link to={`/statistic/detail?word=${search.data.data}`}>
        <div className="result-static">
          <h2>통계 추세</h2>
          <img src={data.static} alt="static-result" />
        </div>
      </Link>
    </div>
  );
}
