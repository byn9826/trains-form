import React from 'react';
import PropTypes from 'prop-types';
import { TEXT_TYPE } from '../helpers/constants';
import * as Types from '../helpers/types';
import InputBase from './base/InputBase';

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
    const intArray = fieldValue.match(/[0-9]/g);
    const intString = intArray ? intArray.join('') : '';
    onChange(fieldName, `${isNegative ? '-' : ''}${intString}`);
  };

  return (
    <InputBase
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
