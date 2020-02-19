import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
} from '../../src/helpers/constants';

export const BASIC_VALUES = {
  message: 'Examples of how to define values and fields',
  text: 'Init value for Text type field',
};

export const BASIC_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
    title: 'Message Field',
  },
  {
    type: TEXT_TYPE,
    name: 'text',
    title: 'Text field',
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    title: 'Note field',
  },
];
