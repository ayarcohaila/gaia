export const truncate = (string, start, end, separator) => {
  const substring = string.substring(start, string.length - 1 + end);
  return string.replace(substring, separator);
};
