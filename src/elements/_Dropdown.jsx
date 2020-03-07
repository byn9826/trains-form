import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Dropdown({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  placeholder,
  onChange,
}) {
  const onClick = (option) => onChange(name, option.value);

  const selectedValue = options.find((option) => option.value === value);

  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className={`ui selection dropdown simple ${disabled ? 'disabled' : ''}`}
          style={style}
        >
          <input type="hidden" name={name} />
          <i className="dropdown icon" />
          {selectedValue && (
            <div className="text">
              {selectedValue.label}
            </div>
          )}
          {placeholder && !selectedValue && (
            <div className="default text">
              {placeholder}
            </div>
          )}
          <div className="menu" style={{ overflow: 'scroll' }}>
            {
              options.map((option) => (
                <div
                  className="item"
                  key={option.value}
                  data-value={option.value}
                  onClick={() => onClick(option)}
                  onKeyDown={() => onClick(option)}
                  role="button"
                >
                  {option.label}
                </div>
              ))
            }
          </div>
        </div>
      );
  }
}

Dropdown.propTypes = Types.ELEMENT_TYPE;
