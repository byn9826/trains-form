import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
} from '../../src/helpers/constants';

export const REQUIRED_VALUES = {
  message: 'Examples of how to define required fields and how validator works',
  text_1: 'No error on init, show error once content has been removed',
  note: 'Customize required error message',
};

export const REQUIRED_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    required: true,
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    required: true,
    width: 50,
  },
  {
    type: PASSWORD_TYPE,
    name: 'password',
    required: true,
    width: 50,
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    required: true,
    width: 50,
  },
  {
    type: TOGGLE_TYPE,
    name: 'toggle',
    required: true,
    width: 50,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    required: true,
    requiredError: 'Please input something!',
  },
  {
    type: RADIO_TYPE,
    name: 'radio',
    required: true,
    width: 50,
  },
  {
    type: CHECKBOX_TYPE,
    name: 'checkbox',
    required: true,
    default: [0],
    width: 50,
  },
];

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
};
