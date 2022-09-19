import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Statisticdetail from "../components/statistic/StatisticdetailComponent";
import Statisticmain from "../components/statistic/StatisticmainComponent";

const StatisticContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(path);
  }, [path]);
  if (pathName === "/statistic") {
    return <Statisticmain />;
  } else if (pathName === "/statistic/detail") {
    return <Statisticdetail />;
  } else {
    return <Statisticmain />;
  }
};

export default StatisticContainer;
