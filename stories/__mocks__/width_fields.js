import {
  MESSAGE_TYPE,
  TEXT_TYPE,
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
    title: 'Message Field',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    title: 'Text Field',
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    title: 'Text Field',
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_3',
    title: 'Text Field',
    width: 60,
  },
  {
    type: TEXT_TYPE,
    name: 'text_4',
    title: 'Text Field',
    width: 40,
  },
  {
    type: NOTE_TYPE,
    name: 'note_1',
    title: 'Note Field',
    width: 33.3,
  },
  {
    type: NOTE_TYPE,
    name: 'note_2',
    title: 'Note Field',
    width: 33.3,
  },
  {
    type: NOTE_TYPE,
    name: 'note_3',
    title: 'Note Field',
    width: 33.3,
  },
];
