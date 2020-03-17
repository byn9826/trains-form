import React from 'react';
import PropTypes from 'prop-types';
import { SEMANTIC_THEME } from '../../helpers/constants';
import { buildClassNames } from '../../helpers/builder';
import * as Types from '../../helpers/types';

export default function Button({
  theme,
  disabled,
  title,
}) {
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <button
          type="submit"
          className={buildClassNames({
            'ui primary button': true,
            disabled,
          })}
        >
          {title}
        </button>
      );
  }
}

Button.propTypes = {
  theme: Types.THEME_TYPE,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};
