import React from 'react';
import Home from '../home/home';
import PropTypes from 'prop-types';

function App(props) {
  const { offersCount } = props;

  return <Home offersCount={ offersCount }/>;
}

App.propTypes = {
  offersCount: PropTypes.number,
};

export default App;
