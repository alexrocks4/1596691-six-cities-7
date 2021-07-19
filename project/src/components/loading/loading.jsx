import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

function Loading({ className }) {
  return (
    <p className={className}>Loading...</p>
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
