import { isDefined } from './utils';
import {
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
} from './constants';

export const buildInitialValues = (values, fields) => {
  const initValues = { ...values };
  fields.forEach((field) => {
    if (isDefined(initValues[field.name])) {
      return;
    }
    if (isDefined(field.default)) {
      initValues[field.name] = field.default;
    } else if (
      field.type === TEXT_TYPE
      || field.type === NOTE_TYPE
      || field.type === NUMBER_TYPE
    ) {
      initValues[field.name] = '';
    }
  });
  return initValues;
};
