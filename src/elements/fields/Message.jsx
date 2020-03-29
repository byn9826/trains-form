import React from 'react';
import * as Types from '../../helpers/types';
import { MESSAGE_TYPE } from '../../helpers/constants';
import {
  isStringType,
  isNumberType,
  isSelectType,
  isBooleanType,
  isArrayType,
  isCalendarType,
} from '../../helpers/validation';
import { getDateString } from '../../helpers/calendar';
import { isDate } from '../../helpers/utils';
import { getMessageClass } from '../../helpers/theme';

export default function Message({
  style,
  value,
  options,
  theme,
  type,
  disabled,
}) {
  let labelValue;
  if (
    type === MESSAGE_TYPE
    || isStringType(type)
    || isNumberType(type)
  ) {
    labelValue = value;
  } else if (isBooleanType(type)) {
    labelValue = value ? 'True' : 'False';
  } else if (isSelectType(type)) {
    const matchedOption = options.find((option) => option.value === value);
    labelValue = matchedOption ? matchedOption.label : '';
  } else if (isArrayType(type)) {
    const matchedOptions = [];
    options.forEach((option) => {
      if (!value.includes(option.value)) return;
      matchedOptions.push(option.label);
    });
    labelValue = matchedOptions.join(', ');
  } else if (isCalendarType(type)) {
    labelValue = isDate(value) ? getDateString(value) : '';
  }

  return (
    <p
      style={style}
      className={getMessageClass(theme, disabled)}
    >
      {labelValue}
    </p>
  );
}

Message.propTypes = Types.ELEMENT_TYPE;
