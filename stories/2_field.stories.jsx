import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import TrainsForms, { FORM_CONSTANTS } from '../src/index';
import { WIDTH_VALUES, WIDTH_FIELDS, WIDTH_OPTIONS } from './__mocks__/fields/width_fields';
import { PLACEHOLDER_VALUES, PLACEHOLDER_FIELDS, PLACEHOLDER_OPTIONS } from './__mocks__/fields/placeholder_fields';
import { DEFAULT_VALUES, DEFAULT_FIELDS, DEFAULT_OPTIONS } from './__mocks__/fields/default_fields';
import { DISABLED_VALUES, DISABLED_FIELDS, DISABLED_OPTIONS } from './__mocks__/fields/disabled_fields';
import { REQUIRED_VALUES, REQUIRED_FIELDS, REQUIRED_OPTIONS } from './__mocks__/fields/required_fields';
import { MAX_MIN_VALUES, MAX_MIN_FIELDS, MAX_MIN_OPTIONS } from './__mocks__/fields/max_min_fields';

setAddon(JSXAddon);

storiesOf('Field', module)
  .addWithJSX('Width', () => (
    <TrainsForms
      values={WIDTH_VALUES}
      fields={WIDTH_FIELDS}
      options={WIDTH_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
    />
  ))
  .addWithJSX('Placeholder', () => (
    <TrainsForms
      values={PLACEHOLDER_VALUES}
      fields={PLACEHOLDER_FIELDS}
      mode={FORM_CONSTANTS.EDIT_MODE}
      options={PLACEHOLDER_OPTIONS}
    />
  ))
  .addWithJSX('Default Value', () => (
    <TrainsForms
      values={DEFAULT_VALUES}
      fields={DEFAULT_FIELDS}
      options={DEFAULT_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
    />
  ))
  .addWithJSX('Disabled', () => (
    <TrainsForms
      values={DISABLED_VALUES}
      fields={DISABLED_FIELDS}
      options={DISABLED_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
    />
  ))
  .addWithJSX('Required (+ validator)', () => (
    <TrainsForms
      values={REQUIRED_VALUES}
      fields={REQUIRED_FIELDS}
      options={REQUIRED_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
    />
  ))
  .addWithJSX('Min/Max (+ validator)', () => (
    <TrainsForms
      values={MAX_MIN_VALUES}
      fields={MAX_MIN_FIELDS}
      options={MAX_MIN_OPTIONS}
      mode={FORM_CONSTANTS.EDIT_MODE}
    />
  ));
