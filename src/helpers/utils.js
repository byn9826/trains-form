export const isNumber = (value) => typeof value === 'number';

export const isBoolean = (value) => typeof value === 'boolean';

export const isDefined = (value) => typeof value !== 'undefined';

export const isNotEmpty = (value) => {
  if (value === undefined || value === null) {
    return false;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  return true;
};
