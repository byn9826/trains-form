import React from 'react';
import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample } from './helpers';

const VALUES = {
  message: 'Examples of how to use validateFormValues action',
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


storiesOf('Form Action', module)
  .add('validateFormValues Action', () => {
    const [formRender, { validateFormValues }] = useForm({
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
    });
    return (
      <div>
        {formRender()}
        <button
          className="ui primary button"
          type="button"
          onClick={validateFormValues}
          style={{
            marginLeft: 20,
          }}
        >
          Trigger validation on all fields
        </button>
      </div>
    );
  })
  .add('resetFormValues Action', () => {
    const [formRender, { resetFormValues }] = useForm({
      values: {
        ...VALUES,
        message: 'Example of how to use resetFormValues action',
      },
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
    });
    return (
      <div>
        {formRender()}
        <button
          className="ui primary button"
          type="button"
          onClick={resetFormValues}
          style={{
            marginLeft: 20,
          }}
        >
          Reset to initial values
        </button>
      </div>
    );
  });
