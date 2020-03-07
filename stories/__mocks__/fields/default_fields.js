import { FORM_CONSTANTS } from '../../../src/index';
import { autoAppendTitleExample } from '../../helpers';

export const DEFAULT_VALUES = {
  text_2: 'Default value will be ignored if its init value is not empty',
};

export const DEFAULT_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
    default: 'Examples of how to define default value of fields',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    default: 'Init field with default value if its value is empty',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    default: 'This default value will be ignored',
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    default: '123',
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    default: true,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    default: 'Default value for Note',
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    default: 2,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    default: [0, 1],
  },
]);

export const DEFAULT_OPTIONS = {
  radio: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  checkbox: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};
