import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { RADIO_TYPE } from '../helpers/constants';
import CheckGroup from './base/CheckGroup';

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

  const isChecked = (option) => option.value === value;

  return (
    <CheckGroup
      type={RADIO_TYPE}
      disabled={disabled}
      style={style}
      name={name}
      options={options}
      theme={theme}
      onClick={onClick}
      error={error}
      isChecked={isChecked}
    />
  );
}

Radio.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number, PropTypes.bool,
  ]),
};
