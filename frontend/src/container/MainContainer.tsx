// import React
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Datatype, RootState } from "../common/types";

// Component import
import MainComponent from "../components/Maincomponent";

// redux state import
import { getDatas as getDataSagaStart } from "../redux/module/data";

// Container component
const MainContainer = () => {
  const datas = useSelector<RootState, Datatype[] | null>(
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
    dispatch(getDataSagaStart());
  }, [dispatch]);

  return (
    <MainComponent
      datas={datas}
      loading={loading}
      error={error}
      getDatas={getDatas}
    />
  );
};

export default MainContainer;
