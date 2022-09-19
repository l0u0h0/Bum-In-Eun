import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../components/Maincomponent";

import { getData } from "../redux/module/data";

const MainContainer = () => {
  const data = useSelector((state: any) => state.datas.data);
  const loading = useSelector((state: any) => state.datas.loading);
  const error = useSelector((state: any) => state.datas.error);
  const dispatch = useDispatch();

  const getDatas = useCallback(() => {
    dispatch(getData());
    console.log(dispatch(getData()));
  }, [dispatch]);
  return (
    <MainComponent
      data={data}
      loading={loading}
      error={error}
      getData={getDatas}
    />
  );
};

export default MainContainer;
