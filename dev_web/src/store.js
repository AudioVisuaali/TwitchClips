import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "./reducers/reducers";

const store = createStore(reducers, applyMiddleware(
  promise(),
  thunkMiddleware,
  logger)
);

export default store;
