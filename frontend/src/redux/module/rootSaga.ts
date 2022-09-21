// import
import { all } from "redux-saga/effects";
import { datasSaga } from "./data";

// root Saga create
export default function* rootSaga() {
  yield all([datasSaga()]);
}
