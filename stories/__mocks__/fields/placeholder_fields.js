import { FORM_CONSTANTS } from '../../../src/index';
import { autoAppendTitleExample } from '../../helpers';

export const PLACEHOLDER_VALUES = {
  message: 'Examples of how to define placeholder for fields',
  text_2: 'Placeholder will be ignored if there is a value',
};

export const PLACEHOLDER_FIELDS = autoAppendTitleExample([
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
