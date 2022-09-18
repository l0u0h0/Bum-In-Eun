// import
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../common/BannerComponent";
import Header from "../../common/HeaderComponent";

// Main Area
export default function Statisticmain() {
  const [data, setData] = useState([{ rank: 0, word_1: "", word_2: "" }]);
  useEffect(() => {
    // example data
    setData([
      {
        rank: 1,
        word_1: "test-data_1_1",
        word_2: "test-data_2_1",
      },
      {
        rank: 2,
        word_1: "test-data_1_2",
        word_2: "test-data_2_2",
      },
      {
        rank: 3,
        word_1: "test-data_1_3",
        word_2: "test-data_2_3",
      },
      {
        rank: 4,
        word_1: "test-data_1_4",
        word_2: "test-data_2_4",
      },
      {
        rank: 5,
        word_1: "test-data_1_5",
        word_2: "test-data_2_5",
      },
    ]);
  }, []);

  return (
    <div className="App-staticmain">
      <Header />
      <Card body className="staticmain-body">
        <h2 className="main-title">통계</h2>
        <hr className="title-body-between" />
        <div className="static-body">
          <table className="static-table">
            <thead>
              <tr>
                <th></th>
                <th>최근 100일</th>
                <th>최근 200일</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, num) => (
                <tr className="static-row" key={`table_row_${num}`}>
                  <td className="static-rank">{data.rank}</td>
                  <td className="static-word_1">
                    <Link to={`/statistic/detail?word=${data.word_1}`}>
                      <div className="static-word-link">{data.word_1}</div>
                    </Link>
                  </td>
                  <td className="static-word_2">
                    <Link to={`/statistic/detail?word=${data.word_2}`}>
                      <div className="static-word-link">{data.word_2}</div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Banner />
    </div>
  );
}
