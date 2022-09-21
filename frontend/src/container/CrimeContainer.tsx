// import Component
import Crimemain from "../components/crime/CrimemainComponent";
import Crimeresult from "../components/crime/CrimeresultComponent";
import Crimedetail from "../components/crime/CrimedetailComponent";

// React import
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Container component
const CrimeContainer = () => {
  const path = useLocation().pathname;
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
  } else {
    return <Crimemain />;
  }
};

export default CrimeContainer;
