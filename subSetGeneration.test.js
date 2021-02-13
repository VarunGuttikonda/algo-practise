const { TestScheduler } = require("jest");
const generateSubsets = require("./subSetGeneration");

test("it returns a proper subset", () => {
  expect(generateSubsets([4, 5, 6])).toStrictEqual(
    expect.arrayContaining([[4], [4, 5], [4, 5, 6], [4, 6], [5], [5, 6], [6]])
  );
  expect(generateSubsets([1, 2])).toStrictEqual(
    expect.arrayContaining([[1], [2], [1, 2]])
  );
});
