import React from "react";
import { Router, Link, NavLink, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ExpensifyDashboardPage from "../components/ExpensifyDashboardPage";
import AddExpensePage from "../components/AddExpensifyPage";
import EditExpense from "../components/EditExpense";
import HelpComponent from "../components/HelpComponent";
import NotFoundComponent from "../components/NotFoundComponent";
import Header from "../components/Header";
import LoginPage from "../components/LoginPageComponent";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
