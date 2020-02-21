import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
} from '../../src/helpers/constants';

export const MAX_MIN_VALUES = {
  message: 'Examples of how to define max/min value of fields and how validator works',
  text_1: 'Min 15 characters',
  text_2: 'Max 20 characters',
  note: 'Customize max/min error messages',
  number: 99,
};

export const MAX_MIN_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    min: 15,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    required: true,
    max: 20,
  },
  {
    type: NUMBER_TYPE,
    name: 'number',
    min: 99,
    max: 99,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    min: 30,
    max: 35,
    minError: 'Too short',
    maxError: 'Too long',
  },
];
