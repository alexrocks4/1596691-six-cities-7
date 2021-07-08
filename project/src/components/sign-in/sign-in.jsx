import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';
import { AppRoute } from '../../const';
import { connect } from 'react-redux';
import { login } from '../../store/api-actions';

const PASSWORD_FIELD_NAME = 'password';

function SignIn({ submitLogin }) {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  const handleFieldChange = ({ target }) => {
    const value = target.name === PASSWORD_FIELD_NAME ? target.value.trim() : target.value;

    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    submitLogin(formData);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleFieldChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleFieldChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                to={AppRoute.MAIN}
                className="locations__item-link"
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  submitLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitLogin(credentials) {
    dispatch(login(credentials));
  },
});

export { SignIn };
export default connect(null, mapDispatchToProps)(SignIn);
