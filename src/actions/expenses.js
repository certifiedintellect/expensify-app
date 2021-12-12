import uuid from "uuid";
import database from "../firebase/firebase";

// actions
// ADD_EXPENSE

export const addExpenseGen = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {description, note, amount, createdAt}
    database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpenseGen({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

export const removeExpenseGen = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const editExpenseGen = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
