import React, { useState } from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';
import { buildClassNames } from '../helpers/builder';
import { getDropdownStyle } from '../helpers/style';

export default function Dropdown({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  placeholder,
  onChange,
  allowClear = true,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedValue = options.find((option) => option.value === value);

  const onClickOption = (e, option) => {
    e.stopPropagation();
    onChange(name, option.value);
    setShowDropdown(false);
  };
  const onClickField = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };
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
            ...getDropdownStyle(showDropdown),
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
            allowClear && !disabled && (
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
                  onClick={(e) => onClickOption(e, option)}
                  onKeyDown={(e) => onClickOption(e, option)}
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
