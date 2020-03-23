import React from 'react';
import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS, FormComponents } from '../src/index';
import { autoAppendTitleExample, useThemeSwitcher } from './helpers';

const VALUES = {
  message: 'Examples of how to use built-in submit button',
  number: 1,
  text: 'Init value for Text type field',
  radio: 1,
};

export const FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
    required: true,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text',
    required: true,
    max: 16,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    required: true,
    min: 10,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    required: true,
    min: 6,
    max: 6,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    required: true,
    max: 12,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    required: true,
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio_1',
    required: true,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox_1',
    required: true,
    min: 2,
  },
  {
    type: FORM_CONSTANTS.SINGLE_SELECT_TYPE,
    name: 'single_select',
    required: true,
  },
  {
    type: FORM_CONSTANTS.DATE_TYPE,
    name: 'date',
    required: true,
  },
]);

export const OPTIONS = {
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

const fileName = '5_submit';

storiesOf('Submit', module)
  .add('Built-in Submit Button', () => {
    const [theme, themSwitchRender] = useThemeSwitcher({ fileName });
    const [formRender] = useForm({
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
      onSubmit: (values) => window.confirm(`Success! Values: ${JSON.stringify(values)}`),
    });
    return (
      <div>
        {themSwitchRender()}
        {formRender()}
      </div>
    );
  })
  .add('getFormDetails Action', () => {
    const [theme, themSwitchRender] = useThemeSwitcher({ fileName });
    const [formRender, { getFormDetails }] = useForm({
      values: {
        ...VALUES,
        message: 'Examples of how to use getFormDetails action',
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
        <FormComponents.Button
          type="button"
          theme={theme}
          onClick={() => {
            const formDetails = getFormDetails();
            window.confirm(`All inputs are valid: ${formDetails.isReady}`);
            window.confirm(`Field Values: ${JSON.stringify(formDetails.values)}`);
            window.confirm(`Field Errors: ${JSON.stringify(formDetails.errors)}`);
          }}
          style={{
            marginLeft: 20,
          }}
          title="Get Form Details"
        />
      </div>
    );
  });
