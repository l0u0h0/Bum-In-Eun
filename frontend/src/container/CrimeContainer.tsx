// import Component
import Crimemain from "../components/crime/CrimemainComponent";
import Crimeresult from "../components/crime/CrimeresultComponent";
import Crimedetail from "../components/crime/CrimedetailComponent";

// React import
import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { DataListType, RootState } from "../common/types";
import { useDispatch } from "react-redux";

import { getListDatas as getListDatasSaga } from "../redux/module/data";

// Container component
const CrimeContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState("");
  const datas = useSelector<RootState, DataListType[] | null>(
    (state) => state.datas.data
  );

  const dispatch = useDispatch();
  const getList = useCallback(() => {
    dispatch(getListDatasSaga());
  }, [dispatch]);

  useEffect(() => {
    setPathName(path);
  }, [path]);

  if (pathName === "/crime") {
    return <Crimemain />;
  } else if (pathName === "/crime/result") {
    return <Crimeresult datas={datas} getList={getList} />;
  } else if (pathName === "/crime/detail") {
    return <Crimedetail />;
  } else {
    return <Crimemain />;
  }
};

export default CrimeContainer;
