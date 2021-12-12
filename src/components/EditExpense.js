import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { editExpenseGen } from "../actions/expenses";
import { startRemoveExpenseGen } from "../actions/expenses";

const EditExpense = (props) => (
  <div>
    <ExpenseForm
      onSubmit={(exp) => {
        props.dispatch(
          editExpenseGen(props.expense.id, { ...exp, id: props.expense.id })
        );
        props.history.push("/");
      }}
      expense={props.expense}
    />
    <button
      onClick={() => {
        props.dispatch(startRemoveExpenseGen(props.expense.id));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpense);
