import React from 'react';
import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample, useThemeSwitcher } from './helpers';

const VALUES = {
  message: 'Examples of how to build a form for viewing',
  number: 123456,
  text: 'Init value for Text type field',
  radio: 1,
  password: '12345',
  toggle: true,
  note: 'a textarea field',
  checkbox_1: [1, 2],
  single_select: 1,
  radio_1: 0,
  date_picker: new Date(),
};

const FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text',
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio_1',
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox_1',
  },
  {
    type: FORM_CONSTANTS.SINGLE_SELECT_TYPE,
    name: 'single_select',
  },
  {
    type: FORM_CONSTANTS.DATE_TYPE,
    name: 'date_picker',
  },
]);

const OPTIONS = {
  radio_1: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  checkbox_1: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  single_select: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};

const fileName = '1_mode';

storiesOf('Mode', module)
  .add('View', () => {
    const [theme, themSwitchRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      theme,
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.VIEW_MODE,
    });
    return (
      <div>
        {themSwitchRender()}
        {formRender()}
      </div>
    );
  })
  .add('View as message', () => {
    const [theme, themSwitchRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: {
        ...VALUES,
        message: 'Examples of how to build a form for viewing as messages',
      },
      theme,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.VIEW_MODE,
      configs: {
        viewAsMessage: true,
      },
    });
    return (
      <div>
        {themSwitchRender()}
        {formRender()}
      </div>
    );
  })
  .add('Edit', () => {
    const [theme, themSwitchRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: {
        ...VALUES,
        message: 'Examples of how to build a form for editing',
      },
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
    });
    return (
      <div>
        {themSwitchRender()}
        {formRender()}
      </div>
    );
  });
