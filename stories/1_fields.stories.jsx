import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import TrainsForms from '../src/TrainsForms';
import { EDIT_MODE } from '../src/helpers/constants';
import { BASIC_VALUES, BASIC_FIELDS } from './__mocks__/basic_fields';
import { WIDTH_VALUES, WIDTH_FIELDS } from './__mocks__/width_fields';
import { PLACEHOLDER_VALUES, PLACEHOLDER_FIELDS } from './__mocks__/placeholder_fields';
import { DEFAULT_VALUES, DEFAULT_FIELDS } from './__mocks__/default_fields';
import { REQUIRED_VALUES, REQUIRED_FIELDS } from './__mocks__/required_fields';
import { MAX_MIN_VALUES, MAX_MIN_FIELDS } from './__mocks__/max_min_fields';

setAddon(JSXAddon);

storiesOf('Fields', module)
  .addWithJSX('Basic', () => (
    <TrainsForms
      values={BASIC_VALUES}
      fields={BASIC_FIELDS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Width', () => (
    <TrainsForms
      values={WIDTH_VALUES}
      fields={WIDTH_FIELDS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Placeholder', () => (
    <TrainsForms
      values={PLACEHOLDER_VALUES}
      fields={PLACEHOLDER_FIELDS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Default Value', () => (
    <TrainsForms
      values={DEFAULT_VALUES}
      fields={DEFAULT_FIELDS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Required (+ validator)', () => (
    <TrainsForms
      values={REQUIRED_VALUES}
      fields={REQUIRED_FIELDS}
      mode={EDIT_MODE}
    />
  ))
  .addWithJSX('Min/Max (+ validator)', () => (
    <TrainsForms
      values={MAX_MIN_VALUES}
      fields={MAX_MIN_FIELDS}
      mode={EDIT_MODE}
    />
  ));
