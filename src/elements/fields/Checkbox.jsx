import React from 'react';
import * as Types from '../../helpers/types';
import { CHECKBOX_TYPE } from '../../helpers/constants';
import Specials from '../specials';

export default function Checkbox({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  onChange,
  error,
}) {
  const onClick = (option) => {
    const newValue = value.includes(option.value)
      ? value.filter((v) => v !== option.value)
      : [...value, option.value];
    onChange(name, newValue);
  };

  const isChecked = (option) => value.includes(option.value);

  return (
    <Specials.CheckGroup
      type={CHECKBOX_TYPE}
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

Checkbox.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: Types.ARRAY_VALUE_TYPE,
};
