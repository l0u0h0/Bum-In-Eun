// React import
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  CommentAddType,
  CommentType,
  CountIncreaseType,
  Datatype,
  RootState,
} from "../common/types";
import { getDatas as getDataSagaStart } from "../redux/module/data";
import {
  getComments as getCommentsSagastart,
  addComment as addCommentSagaStart,
  increaseCount as increaseCountSagaStart,
} from "../redux/module/comment";
// import component
import Dictionarydetail from "../components/dictionary/DictionarydetailComponent";
import DictionaryMain from "../components/dictionary/DictionarymainComponent";

// Container component
const DictionaryContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState("");
  const datas = useSelector<RootState, Datatype[] | null>(
    (state) => state.datas.data
  );
  const comments = useSelector<RootState, CommentType[] | null>(
    (state) => state.comments.comments
  );

  const dispatch = useDispatch();

  const getDatas = useCallback(() => {
    dispatch(getDataSagaStart());
  }, [dispatch]);
  const getComments = useCallback(
    (word: string | null) => {
      dispatch(getCommentsSagastart(word));
    },
    [dispatch]
  );
  const addComment = useCallback(
    (comment: CommentAddType) => {
      dispatch(addCommentSagaStart(comment));
    },
    [dispatch]
  );
  const increaseCount = useCallback(
    (data: CountIncreaseType) => {
      dispatch(increaseCountSagaStart(data));
    },
    [dispatch]
  );

  useEffect(() => {
    setPathName(path);
  }, [path]);

  if (pathName === "/dictionary") {
    return <DictionaryMain datas={datas} getDatas={getDatas} />;
  } else if (pathName === "/dictionary/detail") {
    return (
      <Dictionarydetail
        comments={comments}
        getComments={getComments}
        addComment={addComment}
        increaseCount={increaseCount}
      />
    );
  } else {
    return <DictionaryMain datas={datas} getDatas={getDatas} />;
  }
};

export default DictionaryContainer;
