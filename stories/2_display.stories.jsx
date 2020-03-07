import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample } from './helpers';

const VALUES = {
  message: 'Examples of how to define width of fields',
  text_1: '50% width',
  text_3: '60% width',
  note_1: '33.3% width',
  password: '123456',
  checkbox: [1, 2],
};

const FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_3',
    width: 60,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    width: 40,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    width: 35,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    width: 65,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note_1',
    width: 33.3,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note_2',
    width: 33.3,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note_3',
    width: 33.3,
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    width: 30,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    width: 30,
  },
]);

const OPTIONS = {
  radio: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
    { label: 'Option D', value: 3 },
    { label: 'Option E', value: 4 },
  ],
  checkbox: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
    { label: 'Option D', value: 3 },
    { label: 'Option E', value: 4 },
  ],
};

const PLACEHOLDER_VALUES = {
  message: 'Examples of how to define placeholder for fields',
  text_2: 'Placeholder will be ignored if there is a value',
};

const PLACEHOLDER_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    placeholder: 'This is placeholder',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    width: 50,
    placeholder: 'This is placeholder',
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    placeholder: 'Input your password here',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    placeholder: 'Placeholder for Numbers',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    placeholder: 'Placeholder for Toggle',
    width: 50,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    placeholder: 'This is placeholder',
  },
]);

storiesOf('Display', module)
  .add('Width', () => {
    const [Form] = useForm({
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
    });
    return Form;
  })
  .add('Placeholder', () => {
    const [Form] = useForm({
      values: PLACEHOLDER_VALUES,
      fields: PLACEHOLDER_FIELDS,
      mode: FORM_CONSTANTS.EDIT_MODE,
    });
    return Form;
  });
