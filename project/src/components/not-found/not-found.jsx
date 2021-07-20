import React from 'react';
import Error from '../error/error';
import PropTypes from 'prop-types';

const NOT_FOUND_MESSAGE = 'Sorry, no such page!';

function NotFound({ statusCode }) {
  return (
    <Error message={NOT_FOUND_MESSAGE} statusCode={statusCode}/>
  );
}

NotFound.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

NotFound.defaultProps = {
  statusCode: 0,
};

export default NotFound;
