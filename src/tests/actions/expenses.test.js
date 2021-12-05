import {
  addExpenseGen,
  removeExpenseGen,
  editExpenseGen,
} from "../../actions/expenses";

test("adding expense generator ", () => {
  const result = addExpenseGen({
    description: "testDesc",
    note: "testNote",
    amount: 0,
    createdAt: 0,
  });

  expect(result.type).toBe("ADD_EXPENSE");
  expect(result.expense.description).toBe("testDesc");
  expect(result.expense.note).toBe("testNote");
  expect(result.expense.amount).toBe(0);
});
