import React from 'react';
import PropTypes from 'prop-types';

export default function SemanticIcon({ iconName, onClickIcon }) {
  return (
    <i
      className={`icon ${iconName}`}
      style={{
        fontSize: 12,
        fontWeight: 100,
        width: 10,
      }}
      onClick={onClickIcon}
      onKeyDown={onClickIcon}
      role="button"
    />
  );
}

SemanticIcon.propTypes = {
  iconName: PropTypes.string,
  onClickIcon: PropTypes.func,
};
