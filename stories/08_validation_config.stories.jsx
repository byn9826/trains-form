import React from 'react';
import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample, useThemeSwitcher } from './helpers';

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
  single_select: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  switch: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};

const INITIAL_VALUES = {
  message: 'Examples of how to validate form on initial',
  text_1: '15 chars',
  text_2: 'Max 20 characters allowed',
  note: 'Customize max/min error messages apply to validateOnInitial as well',
  number: 100,
  integer: 98,
};

const DISABLE_VALUES = {
  message: 'Examples of how to disable field validation on change value',
  text_1: 'Min 15 characters',
  text_2: 'Max 20 characters',
  note: 'Customize max/min error messages',
  number: 100,
  integer: 98,
  switch: 1,
};

const FIELDS = autoAppendTitleExample([
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
    type: FORM_CONSTANTS.INTEGER_TYPE,
    name: 'integer',
    min: 99,
    max: 99,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.QUANTITY_TYPE,
    name: 'quantity',
    default: 9,
    min: 10,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    required: true,
    width: 50,
    placeholder: 'Toggle type will default to false if no initial/default value provided.',
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
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.SWITCH_TYPE,
    name: 'switch',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    min: 1,
    max: 3,
  },
  {
    type: FORM_CONSTANTS.SINGLE_SELECT_TYPE,
    name: 'single_select',
    required: true,
    width: 50,
  },
  {
    type: FORM_CONSTANTS.DATE_TYPE,
    name: 'date',
    required: true,
  },
]);

const fileName = '08_validation_config';

storiesOf('Validation Config', module)
  .add('Enable validation on initial form', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: INITIAL_VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
      configs: {
        validateOnInitial: true,
      },
    });
    return (
      <div>
        {themSwitcherRender()}
        {formRender()}
      </div>
    );
  })
  .add('Disable validation on change field', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: DISABLE_VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
      configs: {
        validateOnChange: false,
      },
    });
    return (
      <div>
        {themSwitcherRender()}
        {formRender()}
      </div>
    );
  });
