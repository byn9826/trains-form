import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample } from './helpers';

const VALUES = {
  message: 'Example of how to define messages for required error globally and locally',
};

const FIELDS = autoAppendTitleExample([
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
  .add('Customize messages for required error', () => {
    const [formRender] = useForm({
      values: VALUES,
      fields: FIELDS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      configs: {
        requiredError: 'A customized global message on required error',
      },
    });
    return formRender();
  })
  .add('Customize messages for submit button', () => {
    const [formRender] = useForm({
      values: {
        ...VALUES,
        message: 'Example of how to customize built-in submit button',
      },
      fields: FIELDS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      onSubmit: (values) => window.confirm(`Success! Values: ${JSON.stringify(values)}`),
      configs: {
        submitTitle: 'Customized Submit Button title',
        submitError: 'Customized Submit Button error',
      },
    });
    return formRender();
  });
