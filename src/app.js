import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { addExpenseGen } from "./actions/expenses";
import { Provider } from "react-redux";
import { setTextFilterGen } from "./actions/filters";
import visibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import "./firebase/firebase";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.querySelector("#app");
ReactDOM.render(jsx, appRoot);
