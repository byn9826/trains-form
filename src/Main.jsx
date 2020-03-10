import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from './helpers/types';
import { EDIT_MODE, SEMANTIC_THEME } from './helpers/constants';
import Context from './helpers/context';
import { fieldValidator, isEmptyErrors } from './helpers/validation';
import { buildInitialValues } from './helpers/builder';
import { isFunction, isBoolean } from './helpers/utils';
import Form from './blocks/Form';

const CONFIGS_DEFAULT = {
  spacing: 20,
  theme: SEMANTIC_THEME,
  submitTitle: 'Submit',
  submitError: 'Please check your inputs!',
  validateOnInitial: false,
  validateOnChange: true,
};

export default function Main({
  mode = EDIT_MODE,
  fields = [],
  values = {},
  options = {},
  configs = {},
  onSubmit = null,
}) {
  const spacingConfig = configs.spacing || CONFIGS_DEFAULT.spacing;
  const combinedConfig = {
    spacing: spacingConfig,
    innerSpacing: configs.innerSpacing || (spacingConfig / 2),
    theme: configs.theme || CONFIGS_DEFAULT.theme,
    submitTitle: configs.submitTitle || CONFIGS_DEFAULT.submitTitle,
    submitError: configs.submitError || CONFIGS_DEFAULT.submitError,
    validateOnInitial: isBoolean(configs.validateOnInitial)
      ? configs.validateOnInitial
      : CONFIGS_DEFAULT.validateOnInitial,
    validateOnChange: isBoolean(configs.validateOnChange)
      ? configs.validateOnChange
      : CONFIGS_DEFAULT.validateOnChange,
    allowSubmitButton: isFunction(onSubmit),
  };

  const initialValues = buildInitialValues(values, fields);
  const initialErrors = {};
  if (configs.validateOnInitial) {
    fields.forEach((field) => {
      initialErrors[field.name] = fieldValidator(field, initialValues[field.name]);
    });
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [hasSubmitError, setHasSubmitError] = useState(false);

  const onChangeValue = (name, value) => {
    const newValues = { ...formValues };
    newValues[name] = value;
    setFormValues(newValues);
  };

  const onChangeError = (name, value) => {
    const newErrors = { ...formErrors };
    newErrors[name] = value;
    setFormErrors(newErrors);
  };

  const onChange = (name, value) => {
    onChangeValue(name, value);
    if (combinedConfig.validateOnChange) {
      const targetField = fields.find((field) => field.name === name);
      const message = fieldValidator(targetField, value);
      onChangeError(name, message);
    }
    setHasSubmitError(false);
  };

  const preSubmit = () => {
    const errors = {};
    fields.forEach((field) => {
      const message = fieldValidator(field, formValues[field.name]);
      errors[field.name] = message;
    });
    setFormErrors(errors);
    if (isEmptyErrors(errors)) {
      onSubmit(formValues);
    } else {
      setHasSubmitError(true);
    }
  };

  const context = {
    mode,
    fields,
    options,
    configs: combinedConfig,
    values: formValues,
    errors: formErrors,
    actions: {
      onChange,
      preSubmit,
    },
    hasSubmitError,
  };

  const formRender = () => (
    <Context.Provider value={context}>
      <div style={{ padding: combinedConfig.innerSpacing }}>
        <Form />
      </div>
    </Context.Provider>
  );

  return [formRender];
}

Main.propTypes = {
  mode: Types.MODE_TYPE,
  fields: Types.FIELDS_TYPE,
  values: Types.VALUES_TYPE,
  options: Types.FORM_OPTIONS_TYPE,
  configs: Types.CONFIGS_TYPE,
  onSubmit: PropTypes.func,
};
