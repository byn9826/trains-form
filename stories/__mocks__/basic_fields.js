import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  NOTE_TYPE,
  TOGGLE_TYPE,
} from '../../src/helpers/constants';

export const BASIC_VALUES = {
  message: 'Examples of how to define values and fields',
  number: 123456,
  text: 'Init value for Text type field',
};

export const BASIC_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: TEXT_TYPE,
    name: 'text',
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
  },
  {
    type: PASSWORD_TYPE,
    name: 'password',
  },
  {
    type: NOTE_TYPE,
    name: 'note',
  },
  {
    type: TOGGLE_TYPE,
    name: 'toggle',
  },
];
