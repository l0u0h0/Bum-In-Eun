// import
import React, { useState, useRef } from "react";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";
import { SearchDataState } from "../common/types";
// img import
// import static_img from "../image/img_6.png";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import Chart from "./chartCompo/ChartComponent";

// Search main Component
export default function SearchComponent({ datas, searchData }) {
  const [searchstate, setSearchstate] = useState(0);
  const [search, setSearch] = useState<SearchDataState>({
    data: "검색어를 입력해주세요.",
    originData: "",
    result: {
      crime: { text: "", mean: "한마디로 좋은 손님", category: "도박" },
      dict: {
        text: "",
        mean: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
      },
      static: null,
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
      searchData(ref.current);

      setSearch({
        data: ref.current,
        originData: search.data?.toString(),
        result: datas,
      });
      setSearchstate(1);
    }
  }
}

// Search result Component
function Searchresult(search) {
  const data = search.data.result;

  return (
    <div className="search-result">
      <Link
        to={`/crime/detail?category=${data.crime.category}&word=${search.data.data}&mean=${data.crime.mean}`}
      >
        <div className="result-crime">
          <h2>범죄 사전</h2>
          <p>카테고리 - {data.crime.category}</p>
          <p>{data.crime.mean}</p>
        </div>
      </Link>
      <Link to={`/dictionary/detail?word=${search.data.data}`}>
        <div className="result-word">
          <h2>은어 사전</h2>
          {data.dict.mean &&
            data.dict.mean.map((text, i) => <p key={`mean_${i}`}>{text}</p>)}
        </div>
      </Link>
      <Link to={`/statistic/detail?word=${search.data.data}`}>
        <div className="result-static">
          <h2>통계 추세</h2>
          <Chart datas={data.static} />
        </div>
      </Link>
    </div>
  );
}
