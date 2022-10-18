// import
import { all } from "redux-saga/effects";
import { datasSaga } from "./data";
import { commentsSaga } from "./comment";
import { searchSaga } from "./search";
import { timedataSaga } from "./timedata";
import { graphSaga } from "./graph";
import { nowdataSaga } from "./nowdata";

// root Saga create
export default function* rootSaga() {
  yield all([
    datasSaga(),
    commentsSaga(),
    searchSaga(),
    timedataSaga(),
    graphSaga(),
    nowdataSaga(),
  ]);
}
