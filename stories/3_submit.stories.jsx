import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import TrainsForms, { FORM_CONSTANTS } from '../src/index';
import { PROPS_VALUES, PROPS_FIELDS, PROPS_OPTIONS } from './__mocks__/submits/props_fields';

setAddon(JSXAddon);

storiesOf('Submit', module)
  .addWithJSX('By Props (+ validator)', () => (
    <TrainsForms
      values={PROPS_VALUES}
      fields={PROPS_FIELDS}
      options={PROPS_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
      onSubmit={() => window.confirm('Success!')}
      configs={{
        submitTitle: 'Save',
        submitError: 'Something wrong with your inputs!',
      }}
    />
  ));
