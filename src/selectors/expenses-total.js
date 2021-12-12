const getTotalExpenses = (expenses) => {
  return expenses.map((expense) => expense.amount).reduce((sum, value) => {
      return sum + value;
  }, 0)/100;
};

export default getTotalExpenses;
