import React from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";

import ExpensifyDashboardPage from "../components/ExpensifyDashboardPage";
import AddExpensePage from "../components/AddExpensifyPage";
import EditExpense from "../components/EditExpense";
import HelpComponent from "../components/HelpComponent";
import NotFoundComponent from "../components/NotFoundComponent";
import Header from "../components/Header";


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensifyDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;