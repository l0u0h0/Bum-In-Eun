// import react
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import Component
import Header from "../../common/HeaderComponent";
// import Type
import { CrimeresultProps } from "../../common/types";

// Crime Result Area
const Crimeresult: React.FC<CrimeresultProps> = ({ datas, getList }) => {
  const location = new URLSearchParams(useLocation().search);
  const type = location.get("category");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([{ word: "", mean: "" }]);

  useEffect(() => {
    if (type === "gambling") {
      setCategory("도박");
    } else if (type === "voicefishing") {
      setCategory("보이스 피싱");
    } else if (type === "drug") {
      setCategory("마약");
    } else if (type === "gendercrime") {
      setCategory("성범죄");
    }
    if (datas !== null) {
      setData(
        datas.map(({ Text, Mean }) => ({
          word: Text,
          mean: Mean,
        }))
      );
    }
  }, [type, datas]);

  useEffect(() => {
    if (type !== null) {
      getList(type);
    }
  }, [getList, type]);

  return (
    <div className="App-crimeresult">
      <Header />
      <Card body className="crimeresult-body">
        <h2 className="result-title">{category}</h2>
        <hr className="title-body-between" />
        <div className="result-body">
          <table className="result-table">
            <tbody>
              {data !== null ? (
                data.map((data, num) => (
                  <tr className="result-row" key={`table_row_${num}`}>
                    <td className="result-word">
                      <Link
                        to={`/crime/detail?category=${category}&word=${data.word}&mean=${data.mean}`}
                      >
                        <div className="result-word-link">{data.word}</div>
                      </Link>
                    </td>
                    <td className="result-mean">{data.mean}</td>
                  </tr>
                ))
              ) : (
                <div>데이터 로딩중,,,</div>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Crimeresult;
