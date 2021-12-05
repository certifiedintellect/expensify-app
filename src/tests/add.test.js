const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}`;

test("adding two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("testing generate message ", () => {
  const value = generateGreeting("sunny");
  expect(value).toBe("Hello sunny");
});
