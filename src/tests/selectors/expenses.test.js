import visibleExpenses from "../../selectors/expenses";


test("testing selected expenses" , () => {
    const result = visibleExpenses([], {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    })
    expect(result.length).toBe(0);
})
