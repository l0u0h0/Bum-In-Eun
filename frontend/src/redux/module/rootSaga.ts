import { all } from "redux-saga/effects";
import { datasSaga } from "./data";

export default function* rootSaga() {
  yield all([datasSaga()]);
}
