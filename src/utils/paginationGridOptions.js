export const PaginationGridOptions = array =>
  array.length > 4 ? { gutter: 16, lg: 3, xl: 4, xxl: 5 } : { gutter: 16, column: array.length };
