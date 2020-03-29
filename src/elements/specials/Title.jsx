import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ required, title }) {
  if (!title) return null;
  return (
    <label>
      {title}
      {required && (
        <span style={{ color: 'red' }}>
          *
        </span>
      )}
    </label>
  );
}

Title.propTypes = {
  required: PropTypes.bool,
  title: PropTypes.string,
};
