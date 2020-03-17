export const isNumber = (value) => typeof value === 'number';

export const isBoolean = (value) => typeof value === 'boolean';

export const isFunction = (value) => typeof value === 'function';

export const isArray = (value) => Array.isArray(value);

export const isDate = (value) => value instanceof Date && !Number.isNaN(value.getTime);

export const isDefined = (value) => typeof value !== 'undefined';

export const isNotEmpty = (value) => {
  if (value === undefined || value === null) {
    return false;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }
  if (isArray(value) && value.length === 0) {
    return false;
  }
  if (value instanceof Date && Number.isNaN(value.getTime)) {
    return false;
  }
  return true;
};
