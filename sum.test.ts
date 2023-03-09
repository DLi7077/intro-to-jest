import { sum, subtract, multiply, divide } from "./math";

// sum tests
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

// subtract tests
test("subtracts 1 - 2 to equal -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});
test("subtracts 1 - 2 to equal -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});

// multiply tests
test("multiplies 1 * 2 to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});
test("multiplies 2 * 8 to equal 4", () => {
  expect(multiply(2, 8)).toBe(16);
});

// divide tests
test("divides 2 / 2 to equal 1", () => {
  expect(divide(2, 2)).toBe(1);
});
test("divides 1 / 2 to equal 1", () => {
  expect(divide(1, 2)).toBe(0.5);
});
