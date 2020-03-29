import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../../helpers/types';
import { getFieldClass } from '../../helpers/theme';

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
  return (
    <textarea
      className={getFieldClass(theme, error)}
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
