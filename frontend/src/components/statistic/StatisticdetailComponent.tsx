// import
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../../common/HeaderComponent";
import { Link } from "react-router-dom";
// ex_img
import ex_img from "../../image/img_6.png";

// Detail Area
export default function Statisticdetail({
  datas,
  mean,
  getListData,
  getComments,
}) {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");

  useEffect(() => {
    getListData(word);
    getComments(word);
  }, [getListData, getComments, word]);

  if (datas === null || mean === null) {
    return <div>데이터 로딩중,,</div>;
  } else {
    return (
      <div className="App-staticdetail">
        <Header />
        <Card body className="staticdetail-body">
          <h2 className="detail-title">통계</h2>
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
              <img src={ex_img} alt={datas} />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
