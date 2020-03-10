import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample } from './helpers';

const REQUIRED_VALUES = {
  message: 'Examples of how to define messages for required error globally and locally',
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
    placeholder: 'Use a global defined required error message here',
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text_2',
    required: true,
    width: 50,
    placeholder: 'Use a local defined error message here',
    requiredError: 'A customized local message on required error',
  },
]);

storiesOf('Message Config', module)
  .add('Customize message for required error', () => {
    const [formRender] = useForm({
      values: REQUIRED_VALUES,
      fields: REQUIRED_FIELDS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      configs: {
        requiredError: 'A customized global message on required error',
      },
    });
    return formRender();
  })
  .add('Customize message for submit button', () => {
    const [formRender] = useForm({
      values: REQUIRED_VALUES,
      fields: REQUIRED_FIELDS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      onSubmit: (values) => window.confirm(`Success! Values: ${JSON.stringify(values)}`),
      configs: {
        submitTitle: 'Customized Submit Button title',
        submitError: 'Customized Submit Button error',
      },
    });
    return formRender();
  });
