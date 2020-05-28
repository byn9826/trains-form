export const isString = (value) => typeof value === 'string';

export const isNumber = (value) => typeof value === 'number';

export const isBoolean = (value) => typeof value === 'boolean';

export const isFunction = (value) => typeof value === 'function';

export const isArray = (value) => Array.isArray(value);

export const isDate = (value) => value instanceof Date && !Number.isNaN(value.getTime);

export const isDefined = (value) => typeof value !== 'undefined';

export const isRegx = (value) => value instanceof RegExp;

export const isBasic = (value) => isString(value) || isNumber(value) || isBoolean(value);

export const getIntegerInput = (value) => {
  const intArray = value.match(/[0-9]/g);
  return intArray ? intArray.join('') : '';
};
