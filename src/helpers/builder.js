import {
  isDefined,
  isDate,
  isArray,
  isNumber,
} from './utils';
import {
  TOGGLE_TYPE,
  SWITCH_TYPE,
  RADIO_TYPE,
  SINGLE_SELECT_TYPE,
  CHECKBOX_TYPE,
  DATE_TYPE,
  INTEGER_TYPE,
  QUANTITY_TYPE,
} from './constants';
import { fieldValidator } from './validation';

export const buildInitialValues = (values, fields) => {
  const initValues = { ...values };
  fields.forEach((field) => {
    if (isDefined(initValues[field.name])) return;
    switch (field.type) {
      case TOGGLE_TYPE:
        initValues[field.name] = isDefined(field.default)
          ? Boolean(field.default) : false;
        break;
      case SWITCH_TYPE:
      case RADIO_TYPE:
      case SINGLE_SELECT_TYPE:
        initValues[field.name] = isDefined(field.default)
          ? field.default : null;
        break;
      case CHECKBOX_TYPE:
        initValues[field.name] = isDefined(field.default) && isArray(field.default)
          ? field.default : [];
        break;
      case DATE_TYPE:
        initValues[field.name] = isDefined(field.default) && isDate(field.default)
          ? field.default : null;
        break;
      case INTEGER_TYPE:
        initValues[field.name] = isDefined(field.default) && isNumber(field.default)
          ? parseInt(field.default, 10) : '';
        break;
      case QUANTITY_TYPE:
        initValues[field.name] = isDefined(field.default) && isNumber(field.default)
          ? parseInt(field.default, 10) : 0;
        break;
      default:
        initValues[field.name] = isDefined(field.default)
          ? field.default : '';
        break;
    }
  });
  return initValues;
};

export const buildErrors = (fields, values, configs) => {
  const errors = {};
  fields.forEach((field) => {
    errors[field.name] = fieldValidator(
      field,
      values[field.name],
      configs,
    );
  });
  return errors;
};

export const buildClassNames = (classNames) => {
  const validClasses = [];
  Object.keys(classNames).forEach((className) => {
    if (classNames[className]) {
      validClasses.push(className);
    }
  });
  return validClasses.join(' ');
};
