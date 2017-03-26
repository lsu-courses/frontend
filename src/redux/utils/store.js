import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";

import reducers from "./reducers";
import DevTools from "./devtools";

const enhancer = compose(
  applyMiddleware(thunk, apiMiddleware),
  DevTools.instrument()
);

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, enhancer);
  return store;
}
