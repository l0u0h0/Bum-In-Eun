// import
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../common/BannerComponent";
import Header from "../../common/HeaderComponent";

// Main Area
export default function DictionaryMain() {
  const lists = [
    { num: 1, word: "킹받네" },
    { num: 2, word: "킹받네" },
    { num: 3, word: "킹받네" },
    { num: 4, word: "킹받네" },
    { num: 5, word: "킹받네" },
  ];
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
