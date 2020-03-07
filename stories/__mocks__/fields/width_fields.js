import { FORM_CONSTANTS } from '../../../src/index';
import { autoAppendTitleExample } from '../../helpers';

export const WIDTH_VALUES = {
  message: 'Examples of how to define width of fields',
  text_1: '50% width',
  text_3: '60% width',
  note_1: '33.3% width',
  password: '123456',
  checkbox: [1, 2],
};

export const WIDTH_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_3',
    width: 60,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    width: 40,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    width: 35,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    width: 65,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note_1',
    width: 33.3,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note_2',
    width: 33.3,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note_3',
    width: 33.3,
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    width: 30,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    width: 30,
  },
]);

export const WIDTH_OPTIONS = {
  radio: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
    { label: 'Option D', value: 3 },
    { label: 'Option E', value: 4 },
  ],
  checkbox: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
    { label: 'Option D', value: 3 },
    { label: 'Option E', value: 4 },
  ],
};
