const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);
const pluralize = (count) => count > 1 ? 's' : '';
const getClassName = (isClassValid, className) => isClassValid ? className : '';
const onAPINoResponse = (cb, error) => {
  const { response } = error;

  if (!response) {
    cb();
  }
};

export {
  capitalizeFirstLetter,
  pluralize,
  getClassName,
  onAPINoResponse
};
