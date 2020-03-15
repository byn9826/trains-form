import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Toggle({
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
        <div className="ui toggle checkbox" style={style}>
          <input
            tabIndex={0}
            type="checkbox"
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

Toggle.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.bool,
};
