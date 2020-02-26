import { isDefined } from './utils';
import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  MESSAGE_TYPE,
} from './constants';

export const buildInitialValues = (values, fields) => {
  const initValues = { ...values };
  fields.forEach((field) => {
    if (isDefined(initValues[field.name])) {
      return;
    }
    if (isDefined(field.default)) {
      initValues[field.name] = field.type === TOGGLE_TYPE
        ? Boolean(field.default)
        : field.default;
      return;
    }
    switch (field.type) {
      case TEXT_TYPE:
      case PASSWORD_TYPE:
      case NOTE_TYPE:
      case NUMBER_TYPE:
        initValues[field.name] = '';
        break;
      case TOGGLE_TYPE:
        initValues[field.name] = false;
        break;
      case MESSAGE_TYPE:
      default:
        break;
    }
  });
  return initValues;
};
