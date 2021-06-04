import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const { offersCount } = props;

  return <Main offersCount={ offersCount }/>;
}

App.propTypes = {
  offersCount: PropTypes.number,
};

export default App;
