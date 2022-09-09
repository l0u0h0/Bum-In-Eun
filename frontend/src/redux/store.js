import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import rootSaga from "./module/rootSaga";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    router: routerReducer,
    //... reducer 작성
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
