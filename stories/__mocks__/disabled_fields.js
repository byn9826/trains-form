import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
} from '../../src/helpers/constants';

export const DISABLED_VALUES = {
  message: 'Examples of how to define disabled fields',
  text: 'Disabled fields',
  checkbox: [1],
};

export const DISABLED_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
    disabled: true,
  },
  {
    type: TEXT_TYPE,
    name: 'text',
    disabled: true,
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    disabled: true,
  },
  {
    type: TOGGLE_TYPE,
    name: 'toggle',
    disabled: true,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    disabled: true,
  },
  {
    type: RADIO_TYPE,
    name: 'radio',
    disabled: true,
  },
  {
    type: CHECKBOX_TYPE,
    name: 'checkbox',
    disabled: true,
  },
];

export const DISABLED_OPTIONS = {
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
