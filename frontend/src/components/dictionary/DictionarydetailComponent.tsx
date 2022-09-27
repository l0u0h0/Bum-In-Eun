// import
import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../../common/HeaderComponent";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { CommentType } from "../../common/types";

interface dictionarydataState {
  idx: number;
  mean: string | undefined;
  count: number;
}

interface DictionarydetailProps {
  comments: CommentType | null;
  getComments: (arg: string) => void;
  addComment: (arg: CommentType) => void;
}

// Detail Area
const Dictionarydetail: React.FC<DictionarydetailProps> = ({
  comments,
  getComments,
  addComment,
}) => {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");
  // const [ref, setRef] = useState<HTMLInputElement>({ value: "" });
  const ref = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<dictionarydataState[]>([
    { idx: 0, mean: "", count: 0 },
  ]);
  useEffect(() => {
    return () => {
      console.log("unin");
    };
  }, []);
  useEffect(() => {
    if (word !== null) {
      getComments(word);
    }
  }, [getComments, word]);
  useEffect(() => {
    if (comments !== null) {
      console.log(comments);
      setData(
        comments[0].comments.map((data, i) => ({
          idx: i,
          mean: data.Text,
          count: data.No,
        }))
      );
    }
  }, [comments]);

  const count = (datas: dictionarydataState) => {
    let copy = [...data];
    copy[datas.idx] = { ...copy[datas.idx], count: datas.count + 1 };
    setData(copy);
  };
  /** example add func */
  const add = () => {
    let copy = [...data];
    const refResult: string | undefined = ref.current?.value.toString();
    if (comments !== null) {
      addComment({
        id: comments.id,
        text: comments.text,
        comment: [
          {
            No: 0,
            Text: refResult,
          },
        ],
      });
    }
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
  // const testadd = () => {
  //
  // }
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
};

export default Dictionarydetail;
