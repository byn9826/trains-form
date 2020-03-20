import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME, BOOTSTRAP_THEME } from '../helpers/constants';
import { getDropdownStyle } from '../helpers/style';
import { getDropdownClasses } from '../helpers/theme';
import SemanticIcon from './special/SemanticIcon';

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

  const iconRender = () => {
    if (allowClear && selectedValue) {
      return theme === SEMANTIC_THEME ? (
        <SemanticIcon
          iconName="close"
          onClickIcon={onClickIcon}
        />
      ) : (
        <span
          role="button"
          onClick={onClickIcon}
          onKeyDown={onClickIcon}
          style={{ fontSize: 16, fontWeight: 'bold' }}
        >
          ×
        </span>
      );
    }
    return theme === SEMANTIC_THEME && (
      <i
        className="icon dropdown"
        onClick={onClickIcon}
        onKeyDown={onClickIcon}
        role="button"
      />
    );
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
          {
            !disabled && iconRender()
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
