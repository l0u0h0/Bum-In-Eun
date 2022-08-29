// import
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";

// Main Area
export default function DictionaryMain() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div className="App-dictionarymain">
      <Header />
      <Card body className="dictionarymain-body">
        <Card body className="first-table">
          <h3 className="table-title">조회가 많았던 키워드</h3>
          <table className="table-content">
            <tbody>
              {list.map((num) => (
                <tr key={`table_row_${num}`}>
                  <th className="data-rank">{num}.</th>
                  <td className="data-word">
                    <Link to="/crimeresult?category=gambling">
                      <div className="data-word-link">킹받네</div>
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
              {list.map((num) => (
                <tr key={`table_row_${num}`}>
                  <th className="data-rank">{num}.</th>
                  <td className="data-word">
                    <Link to="/crimeresult?category=gambling">
                      <div className="data-word-link">킹받네</div>
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
