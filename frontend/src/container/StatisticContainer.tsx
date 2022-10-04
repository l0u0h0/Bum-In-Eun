// React import
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CommentType, RootState, TimeType } from "../common/types";
import { getDatas as getDatasSagaStart } from "../redux/module/timedata";
import { getListData as getListDataSagaStart } from "../redux/module/timedata";
import { getComments as getCommentsSagaStart } from "../redux/module/comment";

// Component import
import Statisticdetail from "../components/statistic/StatisticdetailComponent";
import Statisticmain from "../components/statistic/StatisticmainComponent";

// Container Component
const StatisticContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState("");

  const comments = useSelector<RootState, CommentType[] | null>(
    (state) => state.comments.comments
  );

  const time = useSelector<RootState, TimeType[] | null>(
    (state) => state.timedata.time
  );

  const dispatch = useDispatch();

  const getComments = useCallback(
    (word: string | null) => {
      dispatch(getCommentsSagaStart(word));
    },
    [dispatch]
  );

  const getDatas = useCallback(() => {
    dispatch(getDatasSagaStart());
  }, [dispatch]);

  const getListData = useCallback(() => {
    dispatch(getListDataSagaStart());
  }, [dispatch]);

  useEffect(() => {
    setPathName(path);
  }, [path]);

  if (pathName === "/statistic") {
    return <Statisticmain datas={time} getDatas={getDatas} />;
  } else if (pathName === "/statistic/detail") {
    return (
      <Statisticdetail
        datas={time}
        mean={comments}
        getListData={getListData}
        getComments={getComments}
      />
    );
  } else {
    return <Statisticmain datas={time} getDatas={getDatas} />;
  }
};

export default StatisticContainer;
