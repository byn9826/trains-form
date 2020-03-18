import React from 'react';
import * as Types from '../helpers/types';
import { getFieldClass } from '../helpers/theme';

export default function Input({
  type,
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
    <input
      type={type.toLowerCase()}
      className={getFieldClass(theme, error)}
      style={style}
      disabled={disabled}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
}

Input.propTypes = Types.ELEMENT_TYPE;
