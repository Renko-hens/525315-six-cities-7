import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      type: PropTypes.string,
      favorite: PropTypes.bool,
      premium: PropTypes.bool,
    }),
  ).isRequired,
};

function App({ places }) {
  return <Main places={places} />;
}

App.propTypes = propTypes;

export default App;
