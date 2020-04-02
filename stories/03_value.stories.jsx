import React from 'react';
import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample, useThemeSwitcher } from './helpers';

const VALUES = {
  text_2: 'Default value will be ignored if its init value is not empty',
};

const FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
    default: 'Examples of how to define default values for fields',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_1',
    default: 'Init field with default value if its value is empty',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    default: 'This default value will be ignored',
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    default: '123',
  },
  {
    type: FORM_CONSTANTS.INTEGER_TYPE,
    name: 'integer',
    default: 12345,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    default: true,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    default: 'Default value for Note',
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    default: 2,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    default: [0, 1],
  },
  {
    type: FORM_CONSTANTS.SINGLE_SELECT_TYPE,
    name: 'single_select',
    default: 2,
  },
  {
    type: FORM_CONSTANTS.SWITCH_TYPE,
    name: 'switch',
    default: 1,
  },
  {
    type: FORM_CONSTANTS.DATE_TYPE,
    name: 'date_picker',
    default: new Date(),
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

const fileName = '03_value';

storiesOf('Value', module)
  .add('Default', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
    });
    return (
      <div>
        {themSwitcherRender()}
        {formRender()}
      </div>
    );
  })
  .add('Disabled', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: VALUES,
      fields: FIELDS.map((field) => ({
        ...field,
        default: field.name === 'message'
          ? 'Examples of how to define disabled fields'
          : field.default,
        disabled: true,
      })),
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
    });
    return (
      <div>
        {themSwitcherRender()}
        {formRender()}
      </div>
    );
  });
