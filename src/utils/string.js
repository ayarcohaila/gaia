export const truncate = (string, start, end, separator) => {
  const substring = string.substring(start, string.length - 1 + end);
  return string.replace(substring, separator);
};

export const capitalize = string => {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const parseStringWithEllipsis = (str, startLength, endLength) => {
  if (!str) return '';
  return `${str.substring(0, startLength || 5)}...${str.substring(
    str?.length,
    str?.length - (endLength || 4)
  )}`;
};

const DEFAULT_DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

export const formatDate = (date, options = DEFAULT_DATE_FORMAT_OPTIONS) => {
  if (!date) return '';
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }
  return date.toLocaleDateString('en-US', options);
};

export const convertCamelCaseToSentenceCase = text => {
  const parsedText = text.replace(/([A-Z])/g, ' $1');
  const result = parsedText.charAt(0).toUpperCase() + parsedText.slice(1);
  return result;
};
