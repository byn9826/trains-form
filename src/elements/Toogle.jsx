import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Toogle({
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
        <div className="ui toggle checkbox">
          <input
            tabIndex={0}
            type="checkbox"
            style={style}
            disabled={disabled}
            name={name}
            checked={value}
            onChange={() => onChange(name, !value)}
          />
          <label>{placeholder}</label>
        </div>
      );
  }
}

Toogle.propTypes = Types.ELEMENT_TYPE;
