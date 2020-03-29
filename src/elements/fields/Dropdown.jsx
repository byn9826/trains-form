import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from '../../helpers/types';
import { SEMANTIC_THEME, BOOTSTRAP_THEME, TEXT_ICONS } from '../../helpers/constants';
import { getDropdownStyle } from '../../helpers/style';
import { getDropdownClasses } from '../../helpers/theme';
import Specials from '../specials';

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
  error,
}) {
  const classNames = getDropdownClasses(theme, disabled, error);

  const [showDropdown, setShowDropdown] = useState(false);
  const selectedValue = options.find((option) => option.value === value);

  const onClickOption = (e, option) => {
    e.stopPropagation();
    onChange(name, option.value);
    setShowDropdown(false);
  };
  const onClickField = (e) => {
    e.stopPropagation();
    if (disabled) return;
    setShowDropdown(!showDropdown);
  };
  const onClickIcon = (e) => {
    e.stopPropagation();
    if (allowClear && selectedValue) {
      onChange(name, null);
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  switch (theme) {
    case BOOTSTRAP_THEME:
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className={classNames.group}
          onClick={onClickField}
          onKeyDown={onClickField}
          role="button"
          style={{
            ...style,
            ...getDropdownStyle(showDropdown, disabled),
          }}
          disabled={disabled}
        >
          {selectedValue && (
            <div className={classNames.text}>
              {selectedValue.label}
            </div>
          )}
          {placeholder && !selectedValue && (
            <div className={classNames.placeholder}>
              {placeholder}
            </div>
          )}
          {!selectedValue && !placeholder && <div />}
          {
            !disabled && (
              <Specials.TextIcon
                iconName={
                  allowClear && selectedValue
                    ? TEXT_ICONS.CLOSE
                    : TEXT_ICONS.DROPDOWN
                }
                onClickIcon={onClickIcon}
              />
            )
          }
          <div
            className={classNames.menu}
            style={{
              display: showDropdown ? 'block' : 'none',
              width: '100%',
            }}
          >
            {
              options.map((option) => (
                <div
                  className={classNames.item}
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

Dropdown.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number, PropTypes.bool,
  ]),
};
