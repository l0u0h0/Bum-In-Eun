// import
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../common/BannerComponent";
import Header from "../../common/HeaderComponent";

// Main Area
export default function Statisticmain({ datas, getDatas }) {
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
        : setData([
            {
              rank: 1,
              word_1: `${datas.datas1[0].text}`,
              word_2: `${datas.datas2[0].text}`,
            },
            {
              rank: 2,
              word_1: `${datas.datas1[1].text}`,
              word_2: `${datas.datas2[1].text}`,
            },
            {
              rank: 3,
              word_1: `${datas.datas1[2].text}`,
              word_2: `${datas.datas2[2].text}`,
            },
            {
              rank: 4,
              word_1: `${datas.datas1[3].text}`,
              word_2: `${datas.datas2[3].text}`,
            },
            {
              rank: 5,
              word_1: `${datas.datas1[4].text}`,
              word_2: `${datas.datas2[4].text}`,
            },
          ]);
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
}
