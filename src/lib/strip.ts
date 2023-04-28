/**
 * Strips the code block from a string surrounded by three backticks.
 * If no code block is found, returns an empty string.
 * @param {string} string - The string to search for a code block.
 * @returns {string} The code block found in the string, or an empty string if none is found.
 */
export function stripCodeBlocks(string: string): string {
  const r = /^(```)([\s\S])*^(```)/gm;
  const matches = string.match(r);
  if (matches) {
    return matches[0]
      .split("\n")
      .filter((line) => !line.startsWith("```"))
      .join("\n");
  }
  return "";
}
