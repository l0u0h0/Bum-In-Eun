// import
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";

// Detail Area
export default function Dictionarydetail() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // example data
    setData([
      {
        rank: 1,
        word_1: "test-data",
        word_2: "test-data_2",
      },
      {
        rank: 2,
        word_1: "test-data",
        word_2: "test-data_2",
      },
      {
        rank: 3,
        word_1: "test-data",
        word_2: "test-data_2",
      },
      {
        rank: 4,
        word_1: "test-data",
        word_2: "test-data_2",
      },
      {
        rank: 5,
        word_1: "test-data",
        word_2: "test-data_2",
      },
    ]);
  }, []);

  return (
    <div className="App-staticmain">
      <Header />
      <Card body className="staticmain-body">
        <h2 className="staticmain-title">통계</h2>
        <hr className="title-body-between" />
        <div className="staticmain-body">
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
                  <td className="static-word_1">{data.word_1}</td>
                  <td className="static-word_2">{data.word_2}</td>
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
