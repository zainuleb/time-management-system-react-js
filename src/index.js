import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import createHistory from "history/createBrowserHistory";

//Redux Imports
import { Provider } from "react-redux";
import store from "./redux/store/Store.js";

const history = createHistory();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
