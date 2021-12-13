import "normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import "./firebase/firebase";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";

import { firebase } from "./firebase/firebase";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.querySelector("#app");

ReactDOM.render(<p>Loading......</p>, appRoot);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, appRoot);
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("logged in " , user);
  } else {
    console.log("logged out");
  }
});
