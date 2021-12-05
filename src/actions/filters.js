export const setTextFilterGen = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

export const sortByDateGen = () => ({
  type: "SORT_BY_DATE",
});

export const sortByAmountGen = () => ({
  type: "SORT_BY_AMOUNT",
});

export const setStartDateGen = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

export const setEndDateGen = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
