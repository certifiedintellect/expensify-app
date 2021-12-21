import "normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "./firebase/firebase";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";

import { firebase } from "./firebase/firebase";
import { history } from "./routers/AppRouter";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.querySelector("#app");
ReactDOM.render(<p>Loading......</p>, appRoot);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
 // console.log(store.getState())
});
