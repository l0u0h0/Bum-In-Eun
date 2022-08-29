import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Header from "../common/HeaderComponent";

export default function Crimeresult() {
  const location = new URLSearchParams(useLocation().search);
  const type = location.get("category");
  const [category, setCategory] = useState(null);
  const [data, setData] = useState([]);
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
    // example data
    setData([
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 첫 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 두 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 세 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 네 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 다섯 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 여섯 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 일곱 번째 단어입니다.`,
      },
      {
        word: `${category}`,
        mean: `이 단어는 ${category} 여덟 번째 단어입니다.`,
      },
    ]);
  }, [type, category]);
  return (
    <div className="App-crimeresult">
      <Header />
      <Card body className="crimeresult-body">
        <h2 className="result-title">{category}</h2>
        <hr className="title-body-between" />
        <div className="result-body">
          <table className="result-table">
            <tbody>
              {data.map((data, num) => (
                <tr className="result-row" key={`table_row_${num}`}>
                  <td className="result-word">
                    <Link
                      to={`/crimedetail?category=${category}&word=${
                        data.word + (num + 1)
                      }&mean=${data.mean}`}
                    >
                      <div className="result-word-link">
                        {data.word + (num + 1)}
                      </div>
                    </Link>
                  </td>
                  <td className="result-mean">{data.mean}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
