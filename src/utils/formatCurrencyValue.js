const CURRENCY_REGEXP = /(\d)(?=(\d{3})+\b)/g;

export const formatCurrencyValue = value => {
  return Number(value)?.toFixed(2).replace(CURRENCY_REGEXP, '$1,');
};
