const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);
const pluralize = (count) => count > 1 ? 's' : '';
const getClassName = (isClassValid, className) => isClassValid ? className : '';

export {
  capitalizeFirstLetter,
  pluralize,
  getClassName
};
