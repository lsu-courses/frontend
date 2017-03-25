import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "containers/AppContainer";

import { Provider } from "react-redux";
import configureStore from "redux/utils/store";

const rootElement = document.getElementById("root");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./containers/AppContainer", () => {
    const NextApp = require("./containers/AppContainer").default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootElement
    );
  });
}
