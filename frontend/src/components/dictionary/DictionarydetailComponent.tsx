// import react
import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import Component
import Header from "../../common/HeaderComponent";
// react-bootstrap
import { InputGroup, Button, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
// import Type
import {
  DictionarydetailProps,
  dictionarydataState,
  ModalPropsType,
} from "../../common/types";

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
    if (word !== null) {
      getComments(word);
    }
  }, [getComments, word]);

  useEffect(() => {
    if (comments !== null && word !== null) {
      setData(
        comments.map((data, i) => ({
          idx: i,
          mean: data.Text,
          count: data.No,
        }))
      );
    }
  }, [comments, word]);

  if (comments === null) {
    return <div>,,,데이터 로딩중</div>;
  }

  /** increase count func */
  const count = (datas: dictionarydataState) => {
    let value = {
      type: word,
      text: datas.mean,
      count: datas.count,
    };
    if (word !== null && datas.mean !== undefined) {
      increaseCount(value);
    }
  };

  /** add func */
  const add = () => {
    let copy = [...data];
    const refResult: string | undefined = ref.current?.value.toString();
    if (refResult === "") {
      setNullText(true);
      return;
    }
    if (comments !== null && word !== null) {
      addComment({
        text: word,
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
              {word !== null && data !== null ? (
                data.map((datarow) => (
                  <tr className="mean-row" key={`table_row_${datarow.idx}`}>
                    <td className="mean-comment">{datarow.mean}</td>
                    <td className="mean-count">
                      <button
                        onClick={() => {
                          count(datarow);
                        }}
                      >
                        {datarow.count}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div>데이터 로딩중,,,,</div>
              )}
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
                error={null}
              />
            </InputGroup>
          </div>
        </div>
      </Card>
    </div>
  );
};

/** Null Error Modal Components */
const MyVerticallyCenteredModal: React.FC<ModalPropsType> = (props, error) => {
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
        <p> 등록하실 단어의 뜻을 작성되지 않았거나 잘못된 작성입니다. </p>
        <p> 다시 확인해주신 후 등록을 진행해주시기 바랍니다! </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dictionarydetail;
