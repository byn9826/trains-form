import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import TrainsForms from '../src/TrainsForms';
import { EDIT_MODE } from '../src/helpers/constants';
import { WIDTH_VALUES, WIDTH_FIELDS, WIDTH_OPTIONS } from './__mocks__/fields/width_fields';
import { PLACEHOLDER_VALUES, PLACEHOLDER_FIELDS, PLACEHOLDER_OPTIONS } from './__mocks__/fields/placeholder_fields';
import { DEFAULT_VALUES, DEFAULT_FIELDS, DEFAULT_OPTIONS } from './__mocks__/fields/default_fields';
import { DISABLED_VALUES, DISABLED_FIELDS, DISABLED_OPTIONS } from './__mocks__/fields/disabled_fields';
import { REQUIRED_VALUES, REQUIRED_FIELDS, REQUIRED_OPTIONS } from './__mocks__/fields/required_fields';
import { MAX_MIN_VALUES, MAX_MIN_FIELDS, MAX_MIN_OPTIONS } from './__mocks__/fields/max_min_fields';
import { autoAppendTitle } from './helpers';

setAddon(JSXAddon);

storiesOf('Field', module)
  .addWithJSX('Width', () => (
    <TrainsForms
      values={WIDTH_VALUES}
      fields={autoAppendTitle(WIDTH_FIELDS)}
      options={WIDTH_OPTIONS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Placeholder', () => (
    <TrainsForms
      values={PLACEHOLDER_VALUES}
      fields={autoAppendTitle(PLACEHOLDER_FIELDS)}
      mode={EDIT_MODE}
      options={PLACEHOLDER_OPTIONS}
    />
  ))
  .addWithJSX('Default Value', () => (
    <TrainsForms
      values={DEFAULT_VALUES}
      fields={autoAppendTitle(DEFAULT_FIELDS)}
      options={DEFAULT_OPTIONS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Disabled', () => (
    <TrainsForms
      values={DISABLED_VALUES}
      fields={autoAppendTitle(DISABLED_FIELDS)}
      options={DISABLED_OPTIONS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Required (+ validator)', () => (
    <TrainsForms
      values={REQUIRED_VALUES}
      fields={autoAppendTitle(REQUIRED_FIELDS)}
      options={REQUIRED_OPTIONS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Min/Max (+ validator)', () => (
    <TrainsForms
      values={MAX_MIN_VALUES}
      fields={autoAppendTitle(MAX_MIN_FIELDS)}
      options={MAX_MIN_OPTIONS}
      mode={EDIT_MODE}
    />
  ));
