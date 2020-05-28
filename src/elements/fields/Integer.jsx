import React from 'react';
import PropTypes from 'prop-types';
import { TEXT_TYPE } from '../../helpers/constants';
import { getIntegerInput } from '../../helpers/utils';
import * as Types from '../../helpers/types';
import Input from './Input';

export default function Integer({
  disabled,
  style,
  name,
  value,
  theme,
  onChange,
  placeholder,
  error,
}) {
  const onChangeValue = (fieldName, fieldValue) => {
    const isNegative = fieldValue.substr(0, 1) === '-';
    const intValue = getIntegerInput(fieldValue);
    onChange(fieldName, `${isNegative ? '-' : ''}${intValue}`);
  };

  return (
    <Input
      type={TEXT_TYPE}
      disabled={disabled}
      style={style}
      name={name}
      value={value}
      theme={theme}
      placeholder={placeholder}
      onChange={onChangeValue}
      error={error}
    />
  );
}

Integer.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
