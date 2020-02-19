import { TOGGLE_TYPE } from './constants';

const hasValueChecker = (type, value) => {
  if (type === TOGGLE_TYPE) {
    return true;
  }
  return value !== undefined && value !== null && value.trim() !== '';
};

export const fieldValidator = (field, value) => {
  if (field.required && !hasValueChecker(field.type, value)) {
    return field.requiredError || 'This field is required';
  }
  if (field.max && value.length > field.max) {
    return field.maxError || `${field.max} characters Maximum`;
  }
  if (field.min && value.length !== 0 && value.length < field.min) {
    return field.minError || `${field.min} characters Minimum`;
  }
  return null;
};
