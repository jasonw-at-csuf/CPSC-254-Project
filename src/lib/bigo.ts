/**
 * Given a string input, returns the substring that matches the format "O(something)".
 *
 * @param {string} string - The input string to be searched for time complexity notation.
 * @returns {array|null} - Returns an array containing the matched substring(s) or null if no matches are found.
 */
export function getBigO(string: string): Array<any> | null {
  const regex = /O\(.*?\)(?!\))/g;
  const time_complexity = string.match(regex);
  if (time_complexity && time_complexity?.length > 0)
    return [time_complexity[0]];
  return null;
}
