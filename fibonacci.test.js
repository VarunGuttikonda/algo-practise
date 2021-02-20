const fibonacci = require("./fibonacci");

test("The fibonacci sequence", () => {
  expect(fibonacci(15)).toBe(610);
  expect(fibonacci(25)).toBe(75025);
  expect(fibonacci(35)).toBe(9227465);
  expect(fibonacci(45)).toBe(1134903170);
  expect(fibonacci(55)).toBe(139583862445);
});
