import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Radio({
  disabled,
  style,
  name,
  value,
  options,
  theme,
  onChange,
}) {
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div className="inline fields" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            options.map((option) => (
              <div
                key={option.value}
                className="field"
                onClick={() => onChange(name, option.value)}
                onKeyDown={() => onChange(name, option.value)}
                role="button"
              >
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name={name}
                    style={style}
                    checked={value === option.value}
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

Radio.propTypes = Types.ELEMENT_TYPE;
