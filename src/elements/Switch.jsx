import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { getSwitchGroupClass, getSwitchItemClass } from '../helpers/theme';

export default function Switch({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  onChange,
}) {
  return (
    <div
      role="group"
      className={getSwitchGroupClass(theme)}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        ...style,
      }}
    >
      {
        options.map((option) => (
          <button
            style={{
              cursor: disabled ? 'default' : 'pointer',
            }}
            key={option.value}
            className={getSwitchItemClass(
              theme, option.value === value,
            )}
            disabled={disabled}
            type="button"
            onClick={() => onChange(
              name, option.value === value ? null : option.value,
            )}
          >
            {option.label}
          </button>
        ))
      }
    </div>
  );
}

Switch.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number, PropTypes.bool,
  ]),
};
