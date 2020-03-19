import React from 'react';
import PropTypes from 'prop-types';
import { SEMANTIC_THEME } from '../../helpers/constants';
import * as Types from '../../helpers/types';
import { getButtonClass } from '../../helpers/theme';

export default function Button({
  theme,
  disabled,
  title,
  type = 'button',
  onClick,
  style,
}) {
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <button
          style={style}
          type={type}
          className={getButtonClass(theme, disabled)}
          disabled={disabled}
          onClick={onClick}
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
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  style: Types.STYLE_TYPE,
};
