import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Checkbox({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  onChange,
}) {
  const onClick = (option) => {
    const newValue = value.includes(option.value)
      ? value.filter((v) => v !== option.value)
      : [...value, option.value];
    onChange(name, newValue);
  };

  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className="inline fields"
          style={{
            ...style,
            flexWrap: 'wrap',
          }}
        >
          {
            options.map((option) => (
              <div
                key={option.value}
                className="field"
                onClick={() => onClick(option)}
                onKeyDown={() => onClick(option)}
                role="button"
              >
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    name={name}
                    checked={value.includes(option.value)}
                    className="hidden"
                    readOnly
                    tabIndex="0"
                    disabled={disabled}
                  />
                  <label>{option.label}</label>
                </div>
              </div>
            ))
          }
        </div>
      );
  }
}

Checkbox.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: Types.ARRAY_VALUE_TYPE,
};
