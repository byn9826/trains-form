import {
  MESSAGE_TYPE,
  TEXT_TYPE,
  NOTE_TYPE,
} from '../../src/helpers/constants';

export const MAX_MIN_VALUES = {
  message: 'Examples of how to define max/min value of fields and how validator works',
  text_1: 'Min 15 characters',
  text_2: 'Max 20 characters',
  note: 'Customize max/min error messages',
};

export const MAX_MIN_FIELDS = [
  {
    type: MESSAGE_TYPE,
    name: 'message',
    title: 'Message Field',
  },
  {
    type: TEXT_TYPE,
    name: 'text_1',
    title: 'Text Field',
    min: 15,
  },
  {
    type: TEXT_TYPE,
    name: 'text_2',
    title: 'Text Field',
    required: true,
    max: 20,
  },
  {
    type: NOTE_TYPE,
    name: 'note',
    title: 'Note Field',
    min: 30,
    max: 35,
    minError: 'Too short',
    maxError: 'Too long',
  },
];
