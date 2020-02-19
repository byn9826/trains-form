import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
} from '../../src/helpers/constants';

export const PLACEHOLDER_VALUES = {
  message: 'Examples of how to define placeholder for fields',
  text_2: 'Placeholder will be ignored if there is a value',
};

export const PLACEHOLDER_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
    title: 'Message Field',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    title: 'Text Field',
    placeholder: 'This is placeholder',
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    title: 'Text Field',
    width: 50,
    placeholder: 'This is placeholder',
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    title: 'Note Field',
    placeholder: 'This is placeholder',
  },
];
