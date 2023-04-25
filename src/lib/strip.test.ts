import { test, expect, describe } from "vitest";
import { stripCodeBlocks } from "./strip";

describe("stripCodeBlocks", () => {
  test("removes code block from string", () => {
    const input =
      "Some text\n```javascript\nconst a = 5;\nconsole.log(a);\n```\n Some more text.";
    const expected =
      "Some text\njavascript\nconst a = 5;\nconsole.log(a);\n Some more text.";
    expect(stripCodeBlocks(input)).toEqual(expected);
  });

  test("removes multiple code block from string", () => {
    const input =
      "Some text\n```javascript\nconst a = 5;\nconsole.log(a);\n```\n```css\nbody {\n  background-color: #000;\n}\n```\n Some more text.";
    const expected =
      "Some text\njavascript\nconst a = 5;\nconsole.log(a);\ncss\nbody {\n  background-color: #000;\n}\n Some more text.";
    expect(stripCodeBlocks(input)).toEqual(expected);
  });

  test("returns empty string if no code block is found", () => {
    const input = "Some text\n Some more text.";
    const expected = "";
    expect(stripCodeBlocks(input)).toEqual(input);
  });
});
