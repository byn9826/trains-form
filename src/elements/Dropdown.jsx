import React, { useState } from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';
import { buildClassNames } from '../helpers/builder';

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
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedValue = options.find((option) => option.value === value);

  const onClickOption = (option) => {
    onChange(name, option.value);
    setShowDropdown(false);
  };
  const onClickField = () => setShowDropdown(!showDropdown);
  const onClickIcon = (e) => {
    e.stopPropagation();
    if (selectedValue) {
      onChange(name, null);
    } else {
      onClickField();
    }
  };

  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className={buildClassNames({
            'ui selection dropdown': true,
            disabled,
          })}
          onClick={onClickField}
          onKeyDown={onClickField}
          role="button"
          style={{
            ...style,
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
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
          {
            !disabled && (
              <i
                className={buildClassNames({
                  icon: true,
                  dropdown: !selectedValue,
                  close: selectedValue,
                })}
                onClick={onClickIcon}
                onKeyDown={onClickIcon}
                role="button"
              />
            )
          }
          <div
            className="menu"
            style={{
              display: showDropdown ? 'block' : 'none',
            }}
          >
            {
              options.map((option) => (
                <div
                  className="item"
                  key={option.value}
                  onClick={() => onClickOption(option)}
                  onKeyDown={() => onClickOption(option)}
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
