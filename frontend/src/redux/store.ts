// import
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
// saga import
import rootSaga from "./module/rootSaga";
import datas from "./module/data";

// history setting
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

// saga create
const sagaMiddleware = createSagaMiddleware();

// store create
export const store = createStore(
  combineReducers({
    router: routerReducer,
    //... reducer 작성
    datas,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
);

// saga run
sagaMiddleware.run(rootSaga);

// export history
export const history = createReduxHistory(store);
