import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
