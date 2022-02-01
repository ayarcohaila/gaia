export const truncate = (string: string, start: number, end: number, separator: string) => {
  const substring = string.substring(start, string.length - 1 + end);
  return string.replace(substring, separator);
};

export const capitalize = (string: string, lower = false) =>
  (lower ? string.toLowerCase() : string).replace(/(?:^|\s|["'([{])+\S/g, match =>
    match.toUpperCase()
  );

export const parseStringWithEllipsis = (str: string, startLength: number, endLength: number) => {
  if (!str) return '';
  return `${str.substring(0, startLength || 5)}...${str.substring(
    str?.length,
    str?.length - (endLength || 4)
  )}`;
};

interface DefaultDateFormatOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'short' | 'long' | 'narrow' | undefined;
  day?: 'numeric' | '2-digit';
}

const DEFAULT_DATE_FORMAT_OPTIONS: DefaultDateFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

export const formatDate = (
  date: Date | string | number,
  options: DefaultDateFormatOptions = DEFAULT_DATE_FORMAT_OPTIONS
) => {
  if (!date) return '';
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }
  return date.toLocaleDateString('en-US', options);
};

export const convertCamelCaseToSentenceCase = (text: string) => {
  const parsedText = text.replace(/([A-Z])/g, ' $1');
  const result = parsedText.charAt(0).toUpperCase() + parsedText.slice(1);
  return result;
};

export const IMG_REGEX = /\.(jpe?g|png|gif|bmp|webp)$/i;

export const isImage = (url: string) => IMG_REGEX.test(url);

export const VIDEO_REGEX = /\.(mp4|mov|avi|wmv|flv|3gp|mkv|webm)$/i;

export const isVideo = (url: string) => VIDEO_REGEX.test(url);

export const replaceFileExtension = (url: string, extension: string) =>
  url?.substr(0, url?.lastIndexOf('.')) + extension;
