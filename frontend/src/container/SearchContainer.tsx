// React import
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, SearchType } from "../common/types";

// Component import
import SearchComponent from "../components/SearchComponent";
import { searchData as searchDataSagaStart } from "../redux/module/search";

// Container Component
const SearchContainer = () => {
  const datas = useSelector<RootState, SearchType | null>(
    (state) => state.search.search
  );

  const dispatch = useDispatch();

  const searchData = useCallback(
    (word: string) => {
      dispatch(searchDataSagaStart(word));
    },
    [dispatch]
  );
  return <SearchComponent datas={datas} searchData={searchData} />;
};

export default SearchContainer;
