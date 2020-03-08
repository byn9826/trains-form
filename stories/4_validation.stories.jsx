import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample } from './helpers';

const REQUIRED_VALUES = {
  message: 'Examples of how to define required fields',
  text_1: 'No error on init, show error once content has been removed',
  note: 'Customize required error message',
};

const REQUIRED_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    required: true,
    requiredError: 'Please input something!',
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    required: true,
    default: [0],
    width: 50,
  },
]);

const OPTIONS = {
  radio: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  checkbox: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
    { label: 'Option D', value: 3 },
    { label: 'Option E', value: 4 },
  ],
};

const MAX_MIN_VALUES = {
  message: 'Examples of how to define max/min value of fields and how validator works',
  text_1: 'Min 15 characters',
  text_2: 'Max 20 characters',
  note: 'Customize max/min error messages',
  number: 99,
};

const MAX_MIN_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    min: 15,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    required: true,
    max: 20,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    required: true,
    min: 10,
    max: 20,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    min: 99,
    max: 99,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    min: 30,
    max: 35,
    minError: 'Too short',
    maxError: 'Too long',
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    min: 1,
    max: 3,
  },
]);

storiesOf('Validation', module)
  .add('Required', () => {
    const [formRender] = useForm({
      values: REQUIRED_VALUES,
      fields: REQUIRED_FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
    });
    return formRender();
  })
  .add('Min & Max', () => {
    const [formRender] = useForm({
      values: MAX_MIN_VALUES,
      fields: MAX_MIN_FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
    });
    return formRender();
  });
