import { setTextFilterGen } from "../../actions/filters";

test("testing text filter ", () => {
  const result = setTextFilterGen("bill");
  expect(result.text).toBe("bill");
});
