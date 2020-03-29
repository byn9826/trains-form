import React from 'react';
import PropTypes from 'prop-types';
import { VIEW_MODE, EDIT_MODE } from '../helpers/constants';
import { getFormClass, getAlertClass } from '../helpers/theme';
import * as Types from '../helpers/types';
import Field from './Field';
import Items from '../elements/items';

export default function Form({
  theme,
  mode,
  values,
  errors,
  fields,
  onChange,
  options,
  configs,
  preSubmit,
  hasSubmitError,
}) {
  return (
    <form
      className={getFormClass(theme)}
      onSubmit={(e) => {
        e.preventDefault();
        preSubmit();
      }}
    >
      {fields.map((field) => (
        <Field
          key={field.name}
          field={field}
          theme={theme}
          disabled={mode === VIEW_MODE || field.disabled}
          value={values[field.name]}
          error={errors[field.name]}
          options={options[field.name]}
          onChange={onChange}
          space={configs.innerSpacing}
          viewAsMessage={configs.viewAsMessage}
        />
      ))}
      {
        configs.allowSubmitButton
        && mode === EDIT_MODE
        && (
          <div style={{ display: 'block', textAlign: 'right' }}>
            {
              hasSubmitError && (
                <div
                  className={getAlertClass(theme)}
                  style={{
                    marginRight: 10,
                    display: 'inline-block',
                  }}
                  role="alert"
                >
                  <p>{configs.submitError}</p>
                </div>
              )
            }
            <Items.Button
              type="submit"
              theme={theme}
              title={configs.submitTitle}
              disabled={hasSubmitError}
            />
          </div>
        )
      }
    </form>
  );
}

Form.propTypes = {
  theme: Types.THEME_TYPE,
  mode: Types.MODE_TYPE,
  values: Types.VALUES_TYPE,
  errors: Types.VALUES_TYPE,
  fields: Types.FIELDS_TYPE,
  options: Types.FORM_OPTIONS_TYPE,
  configs: Types.CONFIGS_TYPE,
  onChange: PropTypes.func,
  preSubmit: PropTypes.func,
  hasSubmitError: PropTypes.bool,
};
