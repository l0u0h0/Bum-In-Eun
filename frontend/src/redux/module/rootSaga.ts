// import
import { all } from "redux-saga/effects";
import { datasSaga } from "./data";
import { commentsSaga } from "./comment";
import { searchSaga } from "./search";

// root Saga create
export default function* rootSaga() {
  yield all([datasSaga(), commentsSaga(), searchSaga()]);
}
