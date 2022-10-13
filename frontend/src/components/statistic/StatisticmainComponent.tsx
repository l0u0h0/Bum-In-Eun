// import react
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Component
import Banner from "../../common/BannerComponent";
import Header from "../../common/HeaderComponent";
// import Type
import { StatisticmainProps } from "../../common/types";

// Statistic Main Area
const Statisticmain: React.FC<StatisticmainProps> = ({ datas, getDatas }) => {
  const [datastate, setDatastate] = useState(true);
  const [data, setData] = useState([{ rank: 0, word_1: "", word_2: "" }]);
  useEffect(() => {
    getDatas();
    setDatastate(false);
  }, [getDatas]);
  useEffect(() => {
    if (datas !== null) {
      datas.datas1 === undefined
        ? setDatastate(true)
        : setData(
            datas !== null
              ? datas.datas1.map((data, i) => ({
                  rank: i + 1,
                  word_1: data.text,
                  word_2: datas.datas2[i].text,
                }))
              : [{ rank: 0, word_1: "null", word_2: "null" }]
          );
      setDatastate(false);
    }
  }, [datas]);

  if (datastate) {
    return <div>데이터 로딩중,,</div>;
  }

  if (datas !== null) {
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
  } else {
    return <div>데이터 로딩중,,,</div>;
  }
};

export default Statisticmain;
