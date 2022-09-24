// import
import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../../common/HeaderComponent";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";

interface dictionarydataState {
  idx: number;
  mean: string | undefined;
  count: number;
}

// Detail Area
export default function Dictionarydetail() {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");
  // const [ref, setRef] = useState<HTMLInputElement>({ value: "" });
  const ref = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<dictionarydataState[]>([
    { idx: 0, mean: "", count: 0 },
  ]);
  useEffect(() => {
    // example data
    setData([
      {
        idx: 0,
        mean: `이 단어의 첫 번째 의미입니다.`,
        count: 5,
      },
      {
        idx: 1,
        mean: `이 단어의 두 번째 의미입니다.`,
        count: 4,
      },
      {
        idx: 2,
        mean: `이 단어의 세 번째 의미입니다.`,
        count: 3,
      },
      {
        idx: 3,
        mean: `이 단어의 네 번째 의미입니다.`,
        count: 2,
      },
      {
        idx: 4,
        mean: `이 단어의 다섯 번째 의미입니다.`,
        count: 1,
      },
    ]);
  }, []);

  const count = (datas: dictionarydataState) => {
    let copy = [...data];
    copy[datas.idx] = { ...copy[datas.idx], count: datas.count + 1 };
    setData(copy);
  };

  const add = () => {
    let copy = [...data];
    const refResult: string | undefined = ref.current?.value.toString();
    copy.push({
      idx: data.length,
      mean: refResult,
      count: 0,
    });
    setData(
      copy.sort(function (a, b) {
        return b.count - a.count;
      })
    );
  };
  return (
    <div className="App-dictionarydetail">
      <Header />
      <Card body className="dictionarydetail-body">
        <h2 className="detail-title">{word}</h2>
        <hr className="title-body-between" />
        <div className="detail-body">
          <table className="mean-table">
            <tbody>
              {data.map((data) => (
                <tr className="mean-row" key={`table_row_${data.idx}`}>
                  <td className="mean-comment">{data.mean}</td>
                  <td className="mean-count">
                    <button
                      onClick={() => {
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
          <hr className="table-add-between" />
          <div className="comment-add-area">
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="add-addon"
                placeholder="단어의 뜻을 입력하세요."
                className="add-text"
                ref={ref}
                type="input"
              />
              <Button
                as="input"
                type="submit"
                className="add-btn"
                variant="outline-secondary"
                id="button-addon1"
                onClick={add}
                value="등록"
              />
            </InputGroup>
          </div>
        </div>
      </Card>
    </div>
  );
}
