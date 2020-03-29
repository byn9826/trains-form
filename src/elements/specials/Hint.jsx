import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../../helpers/types';
import { getHintClass } from '../../helpers/theme';

export default function Hint({ theme, title }) {
  if (!title) return null;
  return (
    <div
      className={getHintClass(theme)}
      style={{ marginTop: 2, display: 'inline-block' }}
    >
      {title}
    </div>
  );
}

Hint.propTypes = {
  theme: Types.THEME_TYPE,
  title: PropTypes.string,
};
