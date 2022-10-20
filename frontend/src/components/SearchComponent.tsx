// import
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import Component
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";
import ChartDetail from "./chartCompo/ChartDetailComponent";
// import Type
import { ModalPropsType, SearchDataState, SearchProps } from "../common/types";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// Search main Component
const SearchComponent: React.FC<SearchProps> = ({
  datas,
  time,
  loading,
  searchData,
  getListData,
}) => {
  const [searchstate, setSearchstate] = useState(false);
  const [nullText, setNullText] = useState(false);

  useEffect(() => {
    if (datas !== null) setSearchstate(true);
  }, [datas]);

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
            placeholder="검색어를 입력해주세요."
            className="search-text"
            ref={inputRef}
            type="input"
          />
        </InputGroup>
        {searchstate && (
          <Searchresult
            searchData={datas}
            staticdata={time}
            loading={loading}
          />
        )}
        <MyVerticallyCenteredModal
          show={nullText}
          onHide={() => setNullText(false)}
          error={null}
        />
      </div>
      <Banner />
    </div>
  );

  function Searchstate() {
    const word: string = inputRef.current ? inputRef.current?.value : "";
    if (word !== "") {
      getListData(word);
      searchData(word);
    } else {
      setNullText(true);
    }
  }
};

// Search result Component
function Searchresult({ searchData, staticdata, loading }) {
  const [search, setSearch] = useState<SearchDataState>({
    word: "검색어를 입력해주세요.",
    data: {
      crime: { text: "", mean: "한마디로 좋은 손님", category: "도박" },
      dict: {
        text: "",
        mean: ["1. 개구리의 함북 방언", "2. 한마디로 좋은 손님"],
      },
      static: null,
    },
  });
  const [checkDict, setCheckDict] = useState(false);
  useEffect(() => {
    if (searchData !== null) {
      setSearch({
        word:
          searchData.crime !== null
            ? searchData.crime.text
            : searchData.dict.text,
        data: searchData,
      });
      searchData.dict.mean !== "NoData"
        ? setCheckDict(true)
        : setCheckDict(false);
    }
  }, [searchData, staticdata]);

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
        <Link to={`/crime`}>
          <div className="result-crime">
            <h2>범죄 사전</h2>
            <p>범죄 사전에 등록되지 않은 단어입니다.</p>
            <p>클릭 시 범죄 사전 페이지로 이동합니다.</p>
          </div>
        </Link>
      )}
      {checkDict && search.data.dict !== null && loading !== true ? (
        <Link to={`/dictionary/detail?word=${search.word}`}>
          <div className="result-word">
            <h2>은어 사전</h2>
            {search.data.dict.mean &&
              search.data.dict.mean.map((text, i) => (
                <p key={`mean_${i}`}>{text}</p>
              ))}
          </div>
        </Link>
      ) : (
        <Link to={`/dictionary`}>
          <div className="result-word">
            <h2>은어 사전</h2>
            <p>은어 사전에 등록되지 않은 단어입니다.</p>
            <p>클릭 시 은어 사전 페이지로 이동합니다.</p>
          </div>
        </Link>
      )}

      <Link to={`/statistic/detail?word=${search.word}`}>
        <div className="result-static">
          <h2>통계 추세</h2>
          {staticdata[0].err ||
          (search.data.static !== null && search.data.static.datas.text) ===
            "NoData" ? (
            <p>통계가 집계되지 않았습니다.</p>
          ) : (
            <ChartDetail datas={staticdata} />
          )}
        </div>
      </Link>
    </div>
  );
}

/** Null Error Modal Components */
const MyVerticallyCenteredModal: React.FC<ModalPropsType> = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>검색</h4>
        <p> 검색어 입력을 확인해주시기 바랍니다. </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchComponent;
