import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Input({
  type,
  disabled,
  style,
  name,
  placeholder,
  value,
  theme,
  onChange,
}) {
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <input
          type={type.toLowerCase()}
          style={style}
          disabled={disabled}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
        />
      );
  }
}

Input.propTypes = Types.ELEMENT_TYPE;
