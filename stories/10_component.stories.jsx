import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FormComponents, FORM_CONSTANTS } from '../src/index';
import { useThemeSwitcher } from './helpers';

const fileName = '10_component';

storiesOf('Component', module)
  .add('Standalone Fields', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [values, setValues] = useState({
      Message: 'Examples of how to use standalone field components',
      Text: '',
      Number: '',
      Integer: '',
      Password: '',
      Note: '',
      Toggle: true,
      Radio: null,
      Switch: null,
      SingleSelect: null,
      Checkbox: [],
      Date: null,
      Items: [],
    });

    const typesRender = () => FORM_CONSTANTS.TYPES.map((type) => {
      const Field = FormComponents[type];
      return (
        <Field
          key={type}
          name={type}
          title={`${type} Field Component`}
          required
          placeholder={`Placeholder for ${type}`}
          value={values[type]}
          error={null}
          theme={theme}
          options={[
            { label: 'Option A', value: 0 },
            { label: 'Option B', value: 1 },
            { label: 'Option C', value: 2 },
          ]}
          onChange={(name, value) => setValues({
            ...values,
            [name]: value,
          })}
          disabled={false}
        />
      );
    });

    return (
      <div>
        {themSwitcherRender()}
        {typesRender()}
      </div>
    );
  });
