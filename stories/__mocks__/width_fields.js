import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NUMBER_TYPE,
  NOTE_TYPE,
} from '../../src/helpers/constants';

export const WIDTH_VALUES = {
  message: 'Examples of how to define width of fields',
  text_1: '50% width',
  text_3: '60% width',
  note_1: '33.3% width',
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
];
