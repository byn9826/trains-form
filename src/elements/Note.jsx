import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME, BOOTSTRAP_THEME } from '../helpers/constants';
import { buildClassNames } from '../helpers/builder';

export default function Note({
  disabled,
  style,
  name,
  placeholder,
  value,
  theme,
  onChange,
  error,
}) {
  let className;

  switch (theme) {
    case BOOTSTRAP_THEME:
      className = buildClassNames({
        'form-control': true,
        'is-invalid': error,
      });
      break;
    case SEMANTIC_THEME:
    default:
      className = null;
      break;
  }

  return (
    <textarea
      className={className}
      rows="5"
      style={style}
      disabled={disabled}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
}

Note.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.string,
};
