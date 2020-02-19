import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
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
    title: 'Message Field',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    title: 'Text Field',
    required: true,
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    title: 'Text Field',
    required: true,
    width: 50,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    title: 'Note Field',
    required: true,
    requiredError: 'Please input something!',
  },
];
