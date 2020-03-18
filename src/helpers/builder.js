import { isDefined, isDate, isArray } from './utils';
import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  MESSAGE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
  SINGLE_SELECT_TYPE,
  DATE_TYPE,
} from './constants';
import { fieldValidator } from './validation';

export const buildInitialValues = (values, fields) => {
  const initValues = { ...values };
  fields.forEach((field) => {
    if (isDefined(initValues[field.name])) return;
    switch (field.type) {
      case TEXT_TYPE:
      case PASSWORD_TYPE:
      case NOTE_TYPE:
      case NUMBER_TYPE:
      case MESSAGE_TYPE:
        initValues[field.name] = isDefined(field.default) ? field.default : '';
        break;
      case TOGGLE_TYPE:
        initValues[field.name] = isDefined(field.default) ? Boolean(field.default) : false;
        break;
      case RADIO_TYPE:
      case SINGLE_SELECT_TYPE:
        initValues[field.name] = isDefined(field.default) ? field.default : null;
        break;
      case CHECKBOX_TYPE:
        initValues[field.name] = isDefined(field.default) && isArray(field.default)
          ? field.default
          : [];
        break;
      case DATE_TYPE:
        initValues[field.name] = isDefined(field.default) && isDate(field.default)
          ? field.default
          : null;
        break;
      default:
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
