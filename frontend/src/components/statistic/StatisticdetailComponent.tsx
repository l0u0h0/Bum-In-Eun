// import react
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import Component
import Header from "../../common/HeaderComponent";
import { StatisticdetailProps } from "../../common/types";
import ChartDetail from "../chartCompo/ChartDetailComponent";

// Detail Area
const Statisticdetail: React.FC<StatisticdetailProps> = ({
  mean,
  graph,
  getListData,
  getComments,
}) => {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");
  const [now, setNow] = useState("");

  useEffect(() => {
    const dt = moment();
    setNow(
      `${dt.format("YYYY")}년 ${dt.format("MM")}월 ${dt.format("DD")}일 기준`
    );
    getListData(word);
    getComments(word);
  }, [getListData, getComments, word]);

  if (graph === null || mean === null) {
    return <div>데이터 로딩중,,</div>;
  } else {
    return (
      <div className="App-staticdetail">
        <Header />
        <Card body className="staticdetail-body">
          <h2 className="detail-title">단어 통계</h2>
          <hr className="title-body-between" />
          <div className="detail-body">
            <Link to={`/dictionary/detail?word=${word}`}>
              <div className="static-word-link">
                <h3>{word}</h3>
              </div>
            </Link>
            <div className="mean-table">
              {mean.length !== 0 ? (
                mean.map((list, i) => {
                  if (i > 2) {
                    return null;
                  } else {
                    return <p> - {list.Text}</p>;
                  }
                })
              ) : (
                <p>아직 등록된 의미가 없습니다.</p>
              )}
            </div>
            <div className="static-area">
              <h4>키워드 언급량 추이</h4>
              <ChartDetail datas={graph} />
              <p> - {now}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default Statisticdetail;
