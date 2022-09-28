// import
import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../../common/HeaderComponent";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
// Type
import {
  CommentAddType,
  CommentType,
  CountIncreaseType,
} from "../../common/types";

interface dictionarydataState {
  idx: number;
  mean: string | undefined;
  count: number;
}

interface DictionarydetailProps {
  comments: CommentType | null;
  getComments: (arg: string) => void;
  addComment: (arg: CommentAddType) => void;
  increaseCount: (arg: CountIncreaseType) => void;
}

// Detail Area
const Dictionarydetail: React.FC<DictionarydetailProps> = ({
  comments,
  getComments,
  addComment,
  increaseCount,
}) => {
  const location = new URLSearchParams(useLocation().search);
  const word = location.get("word");
  const ref = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<dictionarydataState[]>([
    { idx: 0, mean: "", count: 0 },
  ]);
  const [nullText, setNullText] = useState(false);
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
      setData(
        comments[0].comments.map((data, i) => ({
          idx: i,
          mean: data.Text,
          count: data.No,
        }))
      );
    }
  }, [comments]);
  if (comments === null) {
    return <div>,,,데이터 로딩중</div>;
  }
  // const count = (datas: dictionarydataState) => {
  //   let copy = [...data];
  //   copy[datas.idx] = { ...copy[datas.idx], count: datas.count + 1 };
  //   increaseCount({ type: word, text: datas.mean });
  //   setData(copy);
  // };
  /** add func */
  const add = () => {
    let copy = [...data];
    const refResult: string | undefined = ref.current?.value.toString();
    if (refResult === "") {
      setNullText(true);
      return;
    }
    if (comments !== null) {
      addComment({
        id: comments[0].id,
        text: comments[0].text,
        comment: refResult,
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
                        // count(data);
                        increaseCount({ type: word, text: data.mean });
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
              <MyVerticallyCenteredModal
                show={nullText}
                onHide={() => setNullText(false)}
              />
            </InputGroup>
          </div>
        </div>
      </Card>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>단어의 뜻 등록에서 오류 발생!</h4>
        <p>등록하실 단어의 뜻을 작성해주신 후 등록을 진행해주시기 바랍니다!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dictionarydetail;
