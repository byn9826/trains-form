import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
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
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    required: true,
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    required: true,
    width: 50,
  },
  {
    type: PASSWORD_TYPE,
    name: 'password',
    required: true,
    width: 50,
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    required: true,
    width: 50,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    required: true,
    requiredError: 'Please input something!',
  },
];
