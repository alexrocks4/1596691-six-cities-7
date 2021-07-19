import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import PropTypes from 'prop-types';


function Error({ message, statusCode }) {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo></HeaderLogo>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <h1>{message}</h1>
          {statusCode !== 0 && <p>Error: {statusCode}</p>}
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  statusCode: PropTypes.number.isRequired,
};

Error.defaultProps = {
  statusCode: 0,
};

export default Error;
