// import react
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Component
import Banner from "../../common/BannerComponent";
import Header from "../../common/HeaderComponent";
// import Type
import { Datatype, DictionarymainProps } from "../../common/types";

// Dictionary Main Area
const DictionaryMain: React.FC<DictionarymainProps> = ({ datas, getDatas }) => {
  const [lists, setLists] = useState([{ num: 0, word: "" }]);

  useEffect(() => {
    if (datas !== null) {
      setLists(
        datas.map((data: Datatype, i) => ({
          num: i + 1,
          word: data.text,
        }))
      );
    }
  }, [datas]);

  useEffect(() => {
    getDatas();
  }, [getDatas]);

  if (datas === null) {
    return <div>데이터 로딩중,,,</div>;
  }

  return (
    <div className="App-dictionarymain">
      <Header />
      <Card body className="dictionarymain-body">
        <h3>은어 사전</h3>
        <hr />
        <Card body className="first-table">
          <h3 className="table-title">조회가 많았던 키워드</h3>
          <table className="table-content">
            <tbody>
              {datas !== null ? (
                lists.map((list) => (
                  <tr key={`table_row_${list.num}`}>
                    <th className="data-rank">{list.num}.</th>
                    <td className="data-word">
                      <Link to={`/dictionary/detail?word=${list.word}`}>
                        <div className="data-word-link">{list.word}</div>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>데이터 로딩중,,,</td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
        <Card body className="second-table">
          <h3 className="table-title">추천이 많았던 키워드</h3>
          <table className="table-content">
            <tbody>
              {datas !== null ? (
                lists.map((list) => (
                  <tr key={`table_row_${list.num}`}>
                    <th className="data-rank">{list.num}.</th>
                    <td className="data-word">
                      <Link to={`/dictionary/detail?word=${list.word}`}>
                        <div className="data-word-link">{list.word}</div>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>데이터 로딩중,,,</td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </Card>
      <Banner />
    </div>
  );
};

export default DictionaryMain;
