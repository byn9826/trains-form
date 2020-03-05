import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import TrainsForms, { FORM_CONSTANTS } from '../src/index';
import { VIEW_VALUES, VIEW_FIELDS, VIEW_OPTIONS } from './__mocks__/modes/view_fields';
import { EDIT_VALUES, EDIT_FIELDS, EDIT_OPTIONS } from './__mocks__/modes/edit_fields';

setAddon(JSXAddon);

storiesOf('Mode', module)
  .addWithJSX('View', () => (
    <TrainsForms
      values={VIEW_VALUES}
      fields={VIEW_FIELDS}
      options={VIEW_OPTIONS}
      mode={FORM_CONSTANTS.VIEW_MODE}
    />
  ))
  .addWithJSX('Edit', () => (
    <TrainsForms
      values={EDIT_VALUES}
      fields={EDIT_FIELDS}
      options={EDIT_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
    />
  ));
