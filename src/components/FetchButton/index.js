import React from 'react';
import PropTypes from 'prop-types';

const FetchButton = ({ fetchTodo, fetchStatus }) => (
  <button type="button" onClick={fetchTodo}>
    {`Fetch fake todos STATUS: ${fetchStatus}`}
  </button>
);

FetchButton.propTypes = {
  fetchStatus: PropTypes.string.isRequired,
  fetchTodo: PropTypes.func.isRequired,
};

export default FetchButton;
