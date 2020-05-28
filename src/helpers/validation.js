import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  INTEGER_TYPE,
  QUANTITY_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  CHECKBOX_TYPE,
  RADIO_TYPE,
  SINGLE_SELECT_TYPE,
  DATE_TYPE,
  SWITCH_TYPE,
} from './constants';
import {
  isString,
  isNumber,
  isDate,
  isRegx,
  isArray,
  isBoolean,
  isBasic,
} from './utils';
import { getDateString } from './calendar';

export const isStringType = (type) => (
  type === TEXT_TYPE
  || type === NOTE_TYPE
  || type === PASSWORD_TYPE
);

export const isNumberType = (type) => (
  type === NUMBER_TYPE
  || type === INTEGER_TYPE
  || type === QUANTITY_TYPE
);

export const isArrayType = (type) => type === CHECKBOX_TYPE;

export const isBooleanType = (type) => type === TOGGLE_TYPE;

export const isSelectType = (type) => (
  type === RADIO_TYPE
  || type === SINGLE_SELECT_TYPE
  || type === SWITCH_TYPE
);

export const isCalendarType = (type) => type === DATE_TYPE;

const isMinMaxNumberType = (type) => (
  isStringType(type)
  || isNumberType(type)
  || isArrayType(type)
);

const isNotEmpty = (type, value) => {
  if (
    (isStringType(type) || isNumberType(type))
    && (isNumber(value) || (isString(value) && value.trim() !== ''))
  ) {
    return true;
  }
  if (isArrayType(type) && isArray(value) && value.length !== 0) {
    return true;
  }
  if (isBooleanType(type) && isBoolean(value)) {
    return true;
  }
  if (isSelectType(type) && isBasic(value)) {
    return true;
  }
  if (isCalendarType(type) && isDate(value)) {
    return true;
  }
  return false;
};

const maxNumberIsValid = (field, value) => {
  if (isStringType(field.type) || isArrayType(field.type)) {
    return value.length <= field.max;
  }
  if (isNumberType(field.type)) {
    return parseInt(value, 10) <= field.max;
  }
  return true;
};

const minNumberIsValid = (field, value) => {
  if (isStringType(field.type) || isArrayType(field.type)) {
    return value.length >= field.min;
  }
  if (isNumberType(field.type)) {
    return parseInt(value, 10) >= field.min;
  }
  return true;
};

export const isEmptyErrors = (errors) => !Object.values(errors).find((error) => error);

export const fieldValidator = (field, value, configs) => {
  const isEmpty = !isNotEmpty(field.type, value);
  if (field.required && isEmpty) {
    return field.requiredError || configs.requiredError;
  }
  if (
    !isEmpty
    && isRegx(field.match)
    && isStringType(field.type)
    && !value.match(field.match)
  ) {
    return field.matchError || `Regx: ${field.match}`;
  }
  if (
    !isEmpty
    && isNumber(field.max)
    && isMinMaxNumberType(field.type)
    && !maxNumberIsValid(field, value)
  ) {
    if (field.maxError) {
      return field.maxError;
    }
    if (isNumberType(field.type)) {
      return `Number is required to be no greater than ${field.max}.`;
    }
    if (isArrayType(field.type)) {
      return `Maximum ${field.max} selection allowed.`;
    }
    return `Maximum ${field.max} characters allowed.`;
  }
  if (
    !isEmpty
    && isDate(field.max)
    && isCalendarType(field.type)
    && field.max < value
  ) {
    if (field.maxError) {
      return field.maxError;
    }
    return `Date is required to be no later than ${getDateString(field.max)}`;
  }
  if (
    (!isEmpty || field.min === 1)
    && isNumber(field.min)
    && isMinMaxNumberType(field.type)
    && !minNumberIsValid(field, value)
  ) {
    if (field.minError) {
      return field.minError;
    }
    if (isNumberType(field.type)) {
      return `Number is required to be no less than ${field.min}.`;
    }
    if (isArrayType(field.type)) {
      return `Minimum ${field.min} selection required.`;
    }
    return `Minimum ${field.min} characters required.`;
  }
  if (
    !isEmpty
    && isDate(field.min)
    && isCalendarType(field.type)
    && field.min > value
  ) {
    if (field.minError) {
      return field.minError;
    }
    return `Date is required to be no earlier than ${getDateString(field.min)}`;
  }
  return null;
};
