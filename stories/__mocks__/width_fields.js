import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NUMBER_TYPE,
  NOTE_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
} from '../../src/helpers/constants';

export const WIDTH_VALUES = {
  message: 'Examples of how to define width of fields',
  text_1: '50% width',
  text_3: '60% width',
  note_1: '33.3% width',
  password: '123456',
};

export const WIDTH_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_3',
    width: 60,
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    width: 40,
  },
  {
    type: PASSWORD_TYPE,
    name: 'password',
    width: 35,
  },
  {
    type: TOGGLE_TYPE,
    name: 'toggle',
    width: 65,
  },
  {
    type: NOTE_TYPE,
    name: 'note_1',
    width: 33.3,
  },
  {
    type: NOTE_TYPE,
    name: 'note_2',
    width: 33.3,
  },
  {
    type: NOTE_TYPE,
    name: 'note_3',
    width: 33.3,
  },
  {
    type: RADIO_TYPE,
    name: 'radio',
    width: 20,
  },
];

export const WIDTH_OPTIONS = {
  radio: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
    { label: 'Option D', value: 3 },
    { label: 'Option E', value: 4 },
  ],
};
