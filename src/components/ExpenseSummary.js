import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import numeral from "numeral";

const ExpenseSummary = (props) => {
  const formattedExpenses = numeral(props.summaryAmount).format("$0,0.00");
  return (
    <div>
      <h1>Viewing {props.expenses.length} expenses totalling {formattedExpenses}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    summaryAmount: getTotalExpenses(state.expenses),
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
