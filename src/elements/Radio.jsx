import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { getRadioClasses } from '../helpers/theme';

export default function Radio({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  onChange,
  error,
}) {
  const onClick = (option) => onChange(name, option.value);
  const classNames = getRadioClasses(theme, error);

  return (
    <div
      className={classNames.radioGroup}
      style={{
        ...style,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {
        options.map((option) => (
          <div
            key={option.value}
            className={classNames.radioContainer}
            onClick={() => onClick(option)}
            onKeyDown={() => onClick(option)}
            role="button"
          >
            <div className={classNames.radio}>
              <input
                type="radio"
                name={name}
                checked={value === option.value}
                readOnly
                tabIndex="0"
                disabled={disabled}
                className={classNames.radioInput}
              />
              <label className={classNames.radioLabel}>
                {option.label}
              </label>
            </div>
          </div>
        ))
      }
    </div>
  );
}

Radio.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number, PropTypes.bool,
  ]),
};
