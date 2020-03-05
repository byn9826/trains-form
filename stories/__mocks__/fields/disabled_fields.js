import { FORM_CONSTANTS } from '../../../src/index';
import { autoAppendTitleExample } from '../../helpers';

export const DISABLED_VALUES = {
  message: 'Examples of how to define disabled fields',
  text: 'Disabled fields',
  checkbox: [1],
};

export const DISABLED_FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox',
    disabled: true,
  },
  {
    type: FORM_CONSTANTS.SELECT_TYPE,
    name: 'select',
    disabled: true,
  },
]);

export const DISABLED_OPTIONS = {
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
  select: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};
