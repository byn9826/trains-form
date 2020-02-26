import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
} from '../../src/helpers/constants';

export const PLACEHOLDER_VALUES = {
  message: 'Examples of how to define placeholder for fields',
  text_2: 'Placeholder will be ignored if there is a value',
};

export const PLACEHOLDER_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    placeholder: 'This is placeholder',
    width: 50,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    width: 50,
    placeholder: 'This is placeholder',
  },
  {
    type: PASSWORD_TYPE,
    name: 'password',
    placeholder: 'Input your password here',
    width: 50,
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    placeholder: 'Placeholder for numbers',
    width: 50,
  },
  {
    type: TOGGLE_TYPE,
    name: 'toggle',
    placeholder: 'Placeholder for toggle',
    width: 50,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    placeholder: 'This is placeholder',
  },
];
