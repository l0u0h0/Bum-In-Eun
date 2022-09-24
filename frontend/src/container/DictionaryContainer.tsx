// React import
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Datatype, RootState } from "../common/types";
import { getDatas as getDataSagaStart } from "../redux/module/data";

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
  const dispatch = useDispatch();

  const getDatas = useCallback(() => {
    dispatch(getDataSagaStart());
  }, [dispatch]);
  useEffect(() => {
    setPathName(path);
  }, [path]);
  if (pathName === "/dictionary") {
    return <DictionaryMain datas={datas} getDatas={getDatas} />;
  } else if (pathName === "/dictionary/detail") {
    return <Dictionarydetail />;
  } else {
    return <DictionaryMain datas={datas} getDatas={getDatas} />;
  }
};

export default DictionaryContainer;
