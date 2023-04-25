import { describe, expect, it } from "vitest";
import { getBigO } from "./bigo";

describe("getBigO", () => {
  it("should return the time complexity of a given string", () => {
    const result = getBigO("This algorithm has a time complexity of O(n)");
    expect(result).toEqual(["O(n)"]);
  });

  it("should handle multiple time complexities and only return the first", () => {
    const result = getBigO(
      "This algorithm has a time complexity of O(n) and space complexity of O(1)"
    );
    expect(result).toEqual(["O(n)"]);
  });

  it("should return null if no time complexity is found", () => {
    const result = getBigO("This algorithm does not have a time complexity");
    expect(result).toBeNull();
  });

  it("should handle nested parentheses", () => {
    const result = getBigO(
      "This algorithm has a time complexity of O(n(m + k)) "
    );
    expect(result).toEqual(["O(n(m + k))"]);
  });
});
