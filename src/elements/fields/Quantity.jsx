import React from 'react';
import PropTypes from 'prop-types';
import { TEXT_TYPE } from '../../helpers/constants';
import { getIntegerInput } from '../../helpers/utils';
import * as Types from '../../helpers/types';
import Input from './Input';

const buttonStyle = {
  fontSize: 20,
  display: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  cursor: 'pointer',
};

const INPUT_PADDING = 35;
const BUTTON_MARGIN = 10;

export default function Quantity({
  disabled,
  style,
  name,
  value,
  theme,
  onChange,
  error,
}) {
  const onChangeValue = (fieldName, fieldValue) => {
    const intValue = getIntegerInput(fieldValue);
    onChange(fieldName, intValue);
  };

  const onClickMinus = (e) => {
    e.stopPropagation();
    const newValue = parseInt(value, 10);
    onChange(name, newValue ? newValue - 1 : 0);
  };

  const onClickPlus = (e) => {
    e.stopPropagation();
    const newValue = parseInt(value, 10);
    onChange(name, newValue ? newValue + 1 : 1);
  };

  return (
    <div style={{ height: 35 }}>
      <span
        role="button"
        style={{
          ...buttonStyle,
          marginLeft: BUTTON_MARGIN,
          float: 'left',
        }}
        onClick={onClickMinus}
        onKeyDown={onClickMinus}
      >
        -
      </span>
      <Input
        type={TEXT_TYPE}
        disabled={disabled}
        style={{
          ...style,
          marginTop: -30,
          paddingLeft: INPUT_PADDING,
          paddingRight: INPUT_PADDING,
          textAlign: 'center',
          verticalAlign: 'top',
          display: 'inline-block',
        }}
        name={name}
        value={value}
        theme={theme}
        onChange={onChangeValue}
        error={error}
      />
      <span
        role="button"
        style={{
          ...buttonStyle,
          marginRight: BUTTON_MARGIN,
          marginTop: -50,
          float: 'right',
        }}
        onClick={onClickPlus}
        onKeyDown={onClickPlus}
      >
        +
      </span>
    </div>
  );
}

Quantity.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
