import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Note({
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
        <textarea
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
}

Note.propTypes = Types.ELEMENT_TYPE;
