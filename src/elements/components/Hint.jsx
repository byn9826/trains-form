import React from 'react';
import PropTypes from 'prop-types';
import { SEMANTIC_THEME, BOOTSTRAP_THEME } from '../../helpers/constants';
import * as Types from '../../helpers/types';

export default function Hint({ theme, title }) {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = 'invalid-feedback';
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui pointing red basic label';
      break;
  }
  return (
    <div
      className={className}
      style={{ marginTop: 2 }}
    >
      {title}
    </div>
  );
}

Hint.propTypes = {
  theme: Types.THEME_TYPE,
  title: PropTypes.string,
};
