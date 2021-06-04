import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';

function NotFound() {
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
          <h1>Sorry, no such page!</h1>
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
