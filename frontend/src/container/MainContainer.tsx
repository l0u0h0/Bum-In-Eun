// import React
import React, { useCallback } from "react";
// import Redux
import { useDispatch, useSelector } from "react-redux";
// import Type
import { Datatype, RootState } from "../common/types";
// Component import
import MainComponent from "../components/Maincomponent";
// import Saga
import { getDatas as getDataSagaStart } from "../redux/module/data";
import { getNowDatas as getNowDataSagaStart } from "../redux/module/nowdata";

// Container component
const MainContainer = () => {
  const datas = useSelector<RootState, Datatype[] | null>(
    (state) => state.datas.data
  );
  const nowdatas = useSelector<RootState, Datatype[] | null>(
    (state) => state.nowdata.data
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.datas.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.datas.error
  );

  const dispatch = useDispatch();

  const getDatas = useCallback(() => {
    dispatch(getDataSagaStart());
  }, [dispatch]);

  const getNowDatas = useCallback(() => {
    dispatch(getNowDataSagaStart());
  }, [dispatch]);

  return (
    <MainComponent
      datas={datas}
      nowdatas={nowdatas}
      loading={loading}
      error={error}
      getDatas={getDatas}
      getNowDatas={getNowDatas}
    />
  );
};

export default MainContainer;
