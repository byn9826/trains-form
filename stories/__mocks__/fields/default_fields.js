import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
  SELECT_TYPE,
} from '../../../src/helpers/constants';

export const DEFAULT_VALUES = {
  text_2: 'Default value will be ignored if its init value is not empty',
};

export const DEFAULT_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
    default: 'Examples of how to define default value of fields',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    default: 'Init field with default value if its value is empty',
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    default: 'This default value will be ignored',
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    default: '123',
  },
  {
    type: TOGGLE_TYPE,
    name: 'toggle',
    default: true,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    default: 'Default value for Note',
  },
  {
    type: RADIO_TYPE,
    name: 'radio',
    default: 2,
  },
  {
    type: CHECKBOX_TYPE,
    name: 'checkbox',
    default: [0, 1],
  },
  {
    type: SELECT_TYPE,
    name: 'select',
    default: 1,
  },
];

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
  select: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};
