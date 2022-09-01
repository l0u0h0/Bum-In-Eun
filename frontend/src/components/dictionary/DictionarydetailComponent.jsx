// import
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../common/HeaderComponent";
// ex_img

// Detail Area
export default function Dictionarydetail() {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");
  const [data, setData] = useState([]);
  useEffect(() => {
    // example data
    setData([
      {
        idx: 0,
        word: `${word}`,
        mean: `이 단어의 첫 번째 의미입니다.`,
        count: 5,
      },
      {
        idx: 1,
        word: `${word}`,
        mean: `이 단어의 두 번째 의미입니다.`,
        count: 4,
      },
      {
        idx: 2,
        word: `${word}`,
        mean: `이 단어의 세 번째 의미입니다.`,
        count: 3,
      },
      {
        idx: 3,
        word: `${word}`,
        mean: `이 단어의 네 번째 의미입니다.`,
        count: 2,
      },
      {
        idx: 4,
        word: `${word}`,
        mean: `이 단어의 다섯 번째 의미입니다.`,
        count: 1,
      },
    ]);
  }, [word]);

  const count = (datas) => {
    console.log(datas);
    setData([datas.idx, { ...datas, count: datas.count + 1 }]);
    console.log(data[datas.idx]);
  };

  useEffect(() => {
    console.log(data);
  });
  return (
    <div className="App-crimedetail">
      <Header />
      <Card body className="crimedetail-body">
        <h2 className="detail-title">{word}</h2>
        <hr className="title-body-between" />
        <div className="detail-body">
          <table className="result-table">
            <tbody>
              {data.map((data, num) => (
                <tr className="result-row" key={`table_row_${num}`}>
                  <td className="result-word"></td>
                  <td className="result-mean">{data.mean}</td>
                  <td className="result-count">
                    <button
                      onClick={() => {
                        setData({ count: data.count + 1 });
                        count(data);
                      }}
                    >
                      {data.count}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
