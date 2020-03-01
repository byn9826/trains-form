import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import TrainsForms from '../src/TrainsForms';
import { VIEW_MODE, EDIT_MODE } from '../src/helpers/constants';
import { VIEW_VALUES, VIEW_FIELDS, VIEW_OPTIONS } from './__mocks__/modes/view_fields';
import { EDIT_VALUES, EDIT_FIELDS, EDIT_OPTIONS } from './__mocks__/modes/edit_fields';
import { autoAppendTitle } from './helpers';

setAddon(JSXAddon);

storiesOf('Mode', module)
  .addWithJSX('View', () => (
    <TrainsForms
      values={VIEW_VALUES}
      fields={autoAppendTitle(VIEW_FIELDS)}
      options={VIEW_OPTIONS}
      mode={VIEW_MODE}
    />
  ))
  .addWithJSX('Edit', () => (
    <TrainsForms
      values={EDIT_VALUES}
      fields={autoAppendTitle(EDIT_FIELDS)}
      options={EDIT_OPTIONS}
      mode={EDIT_MODE}
    />
  ));
