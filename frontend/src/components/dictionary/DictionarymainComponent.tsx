// import
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../common/BannerComponent";
import Header from "../../common/HeaderComponent";
import { Datatype } from "../../common/types";

// Main Area
export default function DictionaryMain({ datas, getDatas }) {
  const [lists, setLists] = useState([{ num: null, word: "" }]);
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
  return (
    <div className="App-dictionarymain">
      <Header />
      <Card body className="dictionarymain-body">
        <Card body className="first-table">
          <h3 className="table-title">조회가 많았던 키워드</h3>
          <table className="table-content">
            <tbody>
              {lists.map((list) => (
                <tr key={`table_row_${list.num}`}>
                  <th className="data-rank">{list.num}.</th>
                  <td className="data-word">
                    <Link to={`/dictionary/detail?word=${list.word}`}>
                      <div className="data-word-link">{list.word}</div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card body className="second-table">
          <h3 className="table-title">추천이 많았던 키워드</h3>
          <table className="table-content">
            <tbody>
              {lists.map((list) => (
                <tr key={`table_row_${list.num}`}>
                  <th className="data-rank">{list.num}.</th>
                  <td className="data-word">
                    <Link to={`/dictionary/detail?word=${list.word}`}>
                      <div className="data-word-link">{list.word}</div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Card>
      <Banner />
    </div>
  );
}
