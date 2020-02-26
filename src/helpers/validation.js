import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
} from './constants';
import { isNumber, isBoolean, isNotEmpty } from './utils';

const isStringType = (type) => (
  type === TEXT_TYPE
  || type === NOTE_TYPE
  || type === PASSWORD_TYPE
);

const isInputType = (type) => isStringType(type) || type === NUMBER_TYPE;

const requiredIsValid = (field, value) => {
  if (field.type === TOGGLE_TYPE) {
    return isBoolean(value);
  }
  return isNotEmpty(value);
};

const maxIsValid = (field, value) => {
  if (isStringType(field.type)) {
    return value.length <= field.max;
  }
  if (field.type === NUMBER_TYPE) {
    return parseInt(value, 10) <= field.max;
  }
  return true;
};

const minIsValid = (field, value) => {
  if (isStringType(field.type)) {
    return value.length >= field.min;
  }
  if (field.type === NUMBER_TYPE) {
    return parseInt(value, 10) >= field.min;
  }
  return true;
};

export const fieldValidator = (field, value) => {
  if (field.required && !requiredIsValid(field, value)) {
    return field.requiredError || 'This field is required';
  }
  if (
    isNumber(field.max)
    && isInputType(field.type)
    && isNotEmpty(value)
    && !maxIsValid(field, value)
  ) {
    if (field.maxError) {
      return field.maxError;
    }
    return field.type === NUMBER_TYPE
      ? `Maximum: ${field.max}`
      : `${field.max} characters maximum`;
  }
  if (
    isNumber(field.min)
    && isInputType(field.type)
    && isNotEmpty(value)
    && !minIsValid(field, value)
  ) {
    if (field.minError) {
      return field.minError;
    }
    return field.type === NUMBER_TYPE
      ? `Minimum: ${field.min}`
      : `${field.min} characters Minimum`;
  }
  return null;
};
