import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dictionarydetail from "../components/dictionary/DictionarydetailComponent";
import DictionaryMain from "../components/dictionary/DictionarymainComponent";

const DictionaryContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(path);
  }, [path]);
  if (pathName === "/dictionary") {
    return <DictionaryMain />;
  } else if (pathName === "/dictionary/detail") {
    return <Dictionarydetail />;
  }
};

export default DictionaryContainer;
