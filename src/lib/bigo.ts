export function getBigO(string: string) {
  const regex = /O\(.*?\)/;
  const time_complexity = string.match(regex);
  return time_complexity;
}
