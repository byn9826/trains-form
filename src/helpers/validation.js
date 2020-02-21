import { TEXT_TYPE, NOTE_TYPE, NUMBER_TYPE } from './constants';
import { isNumber, isNotEmpty } from './utils';

const requiredIsValid = (field, value) => isNotEmpty(value);

const maxIsValid = (field, value) => {
  if (field.type === TEXT_TYPE || field.type === NOTE_TYPE) {
    return value.length <= field.max;
  }
  if (field.type === NUMBER_TYPE) {
    return parseInt(value, 10) <= field.max;
  }
  return true;
};

const minIsValid = (field, value) => {
  if (field.type === TEXT_TYPE || field.type === NOTE_TYPE) {
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
    field.max
    && isNumber(field.max)
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
    field.min
    && isNumber(field.min)
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
