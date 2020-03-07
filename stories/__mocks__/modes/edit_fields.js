import { FORM_CONSTANTS } from '../../../src/index';
import { autoAppendTitleExample } from '../../helpers';

export const EDIT_VALUES = {
  message: 'Examples of how to define values and fields for editing a form',
  number: 123456,
  text: 'Init value for Text type field',
  radio: 1,
};

export const EDIT_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text',
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio_1',
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox_1',
  },
]);

export const EDIT_OPTIONS = {
  radio_1: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  checkbox_1: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};
