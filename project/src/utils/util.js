const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);
const pluralize = (count) => count > 1 ? 's' : '';
const getClassName = (isClassValid, className) => isClassValid ? className : '';
const onAPIError = ({ onResponse, onNoResponse }, error) => {
  const { response } = error;

  if (response && onResponse) {
    const { data, status, statusText } = response;

    onResponse({ data, status, statusText });
  }

  if (!response && onNoResponse) {
    onNoResponse();
  }

  return Promise.reject(error);
};

const underscoreUppercase = (inputString) => (
  inputString
    .split()
    .map((character) => {
      if (character === character.toUpperCase()) {
        return `_${character}`;
      }

      return character;
    })
    .join('')
);

const getResource = (actionType) => actionType.split('/')[1];

export {
  capitalizeFirstLetter,
  pluralize,
  getClassName,
  onAPIError,
  underscoreUppercase,
  getResource
};
