import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
} from '../../src/helpers/constants';

export const DEFAULT_VALUES = {
  text_2: 'Default value will be ignored if its init value is not empty',
};

export const DEFAULT_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
    title: 'Message Field',
    default: 'Examples of how to define default value of fields',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    title: 'Text Field',
    default: 'Init field with default value if its value is empty',
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    title: 'Text Field',
    default: 'This default value will be ignored',
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    title: 'Note Field',
    default: 'Default value for Note',
  },
];
