import { isDefined } from './utils';
import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  MESSAGE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
} from './constants';

export const buildInitialValues = (values, fields) => {
  const initValues = { ...values };
  fields.forEach((field) => {
    if (isDefined(initValues[field.name])) {
      return;
    }
    switch (field.type) {
      case TEXT_TYPE:
      case PASSWORD_TYPE:
      case NOTE_TYPE:
      case NUMBER_TYPE:
        initValues[field.name] = isDefined(field.default) ? field.default : '';
        break;
      case TOGGLE_TYPE:
        initValues[field.name] = isDefined(field.default) ? Boolean(field.default) : false;
        break;
      case RADIO_TYPE:
        initValues[field.name] = isDefined(field.default) ? field.default : null;
        break;
      case CHECKBOX_TYPE:
        initValues[field.name] = isDefined(field.default) && Array.isArray(field.default)
          ? field.default
          : [];
        break;
      case MESSAGE_TYPE:
      default:
        break;
    }
  });
  return initValues;
};
