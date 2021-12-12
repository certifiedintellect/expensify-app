import database from "../firebase/firebase";

// actions
// ADD_EXPENSE

export const addExpenseGen = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
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

// setting expenses

export const setExpensesGen = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    const expenses = [];
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapShot) => {
          expenses.push({
            id: childSnapShot.key,
            ...childSnapShot.val(),
          });
        });
        dispatch(setExpensesGen(expenses));
      });
  };
};

export const removeExpenseGen = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpenseGen = (id) => {
  return (dispatch) => {
    database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpenseGen(id));
      });
  };
};

export const editExpenseGen = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
