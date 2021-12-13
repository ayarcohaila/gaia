export const filterFieldsFromObject = (fieldsToBeFiltered, object) => {
  return Object.keys(object).reduce((obj, field) => {
    if (!fieldsToBeFiltered.includes(field)) {
      return { ...obj, [field]: object[field] };
    }
    return obj;
  }, {});
};
