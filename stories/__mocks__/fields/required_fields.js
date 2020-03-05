import { FORM_CONSTANTS } from '../../../src/index';
import { autoAppendTitleExample } from '../../helpers';

export const REQUIRED_VALUES = {
  message: 'Examples of how to define required fields and how validator works',
  text_1: 'No error on init, show error once content has been removed',
  note: 'Customize required error message',
};

export const REQUIRED_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    required: true,
    requiredError: 'Please input something!',
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    required: true,
    default: [0],
    width: 50,
  },
  {
    type: FORM_CONSTANTS.SELECT_TYPE,
    name: 'select',
    required: true,
    width: 50,
  },
]);

export const REQUIRED_OPTIONS = {
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
  select: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};
