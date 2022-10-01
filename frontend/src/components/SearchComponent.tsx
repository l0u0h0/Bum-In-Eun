// import
import React, { useState, useRef, Ref, useEffect } from "react";
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
  // const [search, setSearch] = useState<SearchDataState>({
  //   data: "검색어를 입력해주세요.",
  //   originData: "",
  //   result: {
  //     crime: { text: "", mean: "한마디로 좋은 손님", category: "도박" },
  //     dict: {
  //       text: "",
  //       mean: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
  //     },
  //     static: null,
  //   },
  // });

  const inputRef = useRef<HTMLInputElement>(null);

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
            // placeholder={search.originData}
            placeholder="검색어를 입력해주세요."
            className="search-text"
            ref={inputRef}
            type="input"
          />
        </InputGroup>
        {searchstate === 1 && <Searchresult test={datas} />}
      </div>
      <Banner />
    </div>
  );

  function Searchstate() {
    if (searchstate === 1) {
      setSearchstate(0);
    }
    if (searchstate === 0) {
      searchData(inputRef.current?.value);
      const test = inputRef.current?.value.toString();
      // setSearch({
      //   data: test !== undefined ? test : null,
      //   originData: search.data?.toString(),
      //   result: datas,
      // });
      setSearchstate(1);
    }
  }
}

// Search result Component
function Searchresult({ test }) {
  const [search, setSearch] = useState<SearchDataState>({
    word: "검색어를 입력해주세요.",
    originData: "",
    data: {
      crime: { text: "", mean: "한마디로 좋은 손님", category: "도박" },
      dict: {
        text: "",
        mean: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
      },
      static: null,
    },
  });
  useEffect(() => {
    if (test !== null) {
      console.log(test);
      setSearch({
        word: test.crime.text,
        originData: test.crime.text,
        data: test,
      });
    }
  }, [test]);
  if (search !== null) {
    return (
      <div className="search-result">
        {search.data.crime !== null ? (
          <Link
            to={`/crime/detail?category=${search.data.crime?.category}&word=${search.word}&mean=${search.data.crime?.mean}`}
          >
            <div className="result-crime">
              <h2>범죄 사전</h2>
              <p>카테고리 - {search.data.crime?.category}</p>
              <p>{search.data.crime?.mean}</p>
            </div>
          </Link>
        ) : (
          <Link to={`/crime}`}>
            <div className="result-crime">
              <h2>범죄 사전</h2>
              <p>범죄 사전에 등록되지 않은 단어입니다.</p>
              <p>클릭 시 범죄 사전 페이지로 이동합니다.</p>
            </div>
          </Link>
        )}
        {search.data.dict?.text !== "NoData" ? (
          <Link to={`/dictionary/detail?word=${search.word}`}>
            <div className="result-word">
              <h2>은어 사전</h2>
              {search.data.dict?.mean &&
                search.data.dict?.mean.map((text, i) => (
                  <p key={`mean_${i}`}>{text}</p>
                ))}
            </div>
          </Link>
        ) : (
          <Link to={`/dictionary`}>
            <div className="result-word">
              <h2>은어 사전</h2>
              <p>아직 은어 사전에 등록되지 않은 단어입니다.</p>
              <p>클릭 시 은어 사전 페이지로 이동합니다.</p>
            </div>
          </Link>
        )}

        <Link to={`/statistic/detail?word=${search.word}`}>
          <div className="result-static">
            <h2>통계 추세</h2>
            {search.data.dict?.text !== "NoData" ? (
              <Chart
                datas={
                  search.data.static !== null ? search.data.static.datas : null
                }
              />
            ) : (
              <p>통계가 집계되지 않았습니다.</p>
            )}
          </div>
        </Link>
      </div>
    );
  } else {
    return <div>Sorry</div>;
  }
}
