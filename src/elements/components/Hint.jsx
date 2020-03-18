import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../../helpers/types';
import { getHintClass } from '../../helpers/theme';

export default function Hint({ theme, title }) {
  return (
    <div
      className={getHintClass(theme)}
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
