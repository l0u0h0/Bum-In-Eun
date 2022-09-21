import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Datatype, RootState } from "../common/types";
import MainComponent from "../components/Maincomponent";

import { getData } from "../redux/module/data";

const MainContainer = () => {
  const data = useSelector<RootState, Datatype[] | null>(
    (state) => state.datas.data
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.datas.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.datas.error
  );
  const dispatch = useDispatch();

  const getDatas = useCallback(() => {
    dispatch(getData());
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
