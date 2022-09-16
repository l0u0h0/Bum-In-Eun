import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../components/Maincomponent";

import getData from "../redux/module/data";

const MainContainer = () => {
  const datas = useSelector((state) => state.datas.datas);
  const loading = useSelector((state) => state.datas.loading);
  const error = useSelector((state) => state.datas.error);

  const dispatch = useDispatch();

  const getDatas = useCallback(() => {
    console.log("dispatch");
    dispatch(getData());
    console.log("after");
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
