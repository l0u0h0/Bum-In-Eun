import Crimemain from "../components/crime/CrimemainComponent";
import Crimeresult from "../components/crime/CrimeresultComponent";
import Crimedetail from "../components/crime/CrimedetailComponent";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CrimeContainer = () => {
  const path = useLocation().pathname;
  console.log(useLocation());
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(path);
  }, [path]);
  if (pathName === "/crime") {
    return <Crimemain />;
  } else if (pathName === "/crime/result") {
    return <Crimeresult />;
  } else if (pathName === "/crime/detail") {
    return <Crimedetail />;
  }
};

export default CrimeContainer;
