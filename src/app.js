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

const store = configureStore();
/* 
store.dispatch(
  addExpenseGen({
    description: "water bill",
    amount: 0,
    createdAt: 1000
  })
);


store.dispatch(
  addExpenseGen({
    description: "rent",
    amount: 104500,
    createdAt: 0,
  })
);

store.dispatch(
  addExpenseGen({
    description: "gas bill",
    amount: 4500,
    createdAt: 0
  })
); */


//store.dispatch(setTextFilterGen("bill"));
/*const getVisibleExpenses = visibleExpenses(
  store.getState().expenses,
  store.getState().filters
);
console.log(getVisibleExpenses); */

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.querySelector("#app");
ReactDOM.render(jsx, appRoot);
