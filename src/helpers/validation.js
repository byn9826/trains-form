import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  CHECKBOX_TYPE,
} from './constants';
import { isNumber, isBoolean, isNotEmpty } from './utils';

const isStringType = (type) => (
  type === TEXT_TYPE
  || type === NOTE_TYPE
  || type === PASSWORD_TYPE
);

const isNumberType = (type) => type === NUMBER_TYPE;

const isArrayType = (type) => type === CHECKBOX_TYPE;

const isMinMaxType = (type) => isStringType(type) || isNumberType(type) || isArrayType(type);

const requiredIsValid = (field, value) => {
  if (field.type === TOGGLE_TYPE) {
    return isBoolean(value);
  }
  if (field.type === CHECKBOX_TYPE) {
    return Array.isArray(value) && value.length !== 0;
  }
  return isNotEmpty(value);
};

const maxIsValid = (field, value) => {
  if (isStringType(field.type) || isArrayType(field.type)) {
    return value.length <= field.max;
  }
  if (isNumberType(field.type)) {
    return parseInt(value, 10) <= field.max;
  }
  return true;
};

const minIsValid = (field, value) => {
  if (isStringType(field.type) || isArrayType(field.type)) {
    return value.length >= field.min;
  }
  if (isNumberType(field.type)) {
    return parseInt(value, 10) >= field.min;
  }
  return true;
};

export const isEmptyErrors = (errors) => !Object.values(errors).find((error) => error);

export const fieldValidator = (field, value) => {
  if (field.required && !requiredIsValid(field, value)) {
    return field.requiredError || 'This field is required';
  }
  if (
    isNumber(field.max)
    && isMinMaxType(field.type)
    && isNotEmpty(value)
    && !maxIsValid(field, value)
  ) {
    if (field.maxError) {
      return field.maxError;
    }
    if (isNumberType(field.type)) {
      return `Maximum Number: ${field.max}`;
    }
    if (isArrayType(field.type)) {
      return `Maximum ${field.max} selection allowed`;
    }
    return `${field.max} characters maximum`;
  }
  if (
    isNumber(field.min)
    && isMinMaxType(field.type)
    && (isNotEmpty(value) || field.min === 1)
    && !minIsValid(field, value)
  ) {
    if (field.minError) {
      return field.minError;
    }
    if (isNumberType(field.type)) {
      return `Minimum Number: ${field.min}`;
    }
    if (isArrayType(field.type)) {
      return `Minimum ${field.min} selection required`;
    }
    return `${field.min} characters Minimum`;
  }
  return null;
};
