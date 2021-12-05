import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const demoState = {
  expenses: [
    {
      id: "expenseOne",
      description: "Jan Rent",
      note: "finalp payment",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

// actions
// ADD_EXPENSE

const addExpenseGen = ({
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

const removeExpenseGen = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpenseGen = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const setTextFilterGen = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByDateGen = () => ({
  type: "SORT_BY_DATE",
});

const sortByAmountGen = () => ({
  type: "SORT_BY_AMOUNT",
});

const setStartDateGen = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDateGen = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// reducers

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((item) => item.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// creation and subscription of store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch =
        expense.description.toLowerCase().includes(text.toLowerCase()) ||
        expense.note.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const unsubscribe = store.subscribe(() => {
  const { expenses, filters } = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

// updates to store

const expenseOne = store.dispatch(
  addExpenseGen({
    id: "expenseOne",
    description: "Jan Rent",
    note: "finalp payment",
    amount: 100,
    createdAt: 100,
  })
);

const expenseTwo = store.dispatch(
  addExpenseGen({
    id: "expenseTwo",
    description: "Feb Rent",
    note: "finalp payment",
    amount: 10,
    createdAt: 200,
  })
);

//store.dispatch(removeExpenseGen(expenseOne.expense.id));
//store.dispatch(editExpenseGen(expenseTwo.expense.id, { amount: 500 }));
//store.dispatch(setTextFilterGen("rent"));
/* store.dispatch(sortByAmountGen());
store.dispatch(sortByDateGen());
*/
//store.dispatch(setStartDateGen(125));
//store.dispatch(setEndDateGen(250));
store.dispatch(sortByAmountGen());
