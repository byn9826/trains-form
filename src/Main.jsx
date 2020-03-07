import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from './helpers/types';
import { EDIT_MODE, SEMANTIC_THEME } from './helpers/constants';
import Context from './helpers/context';
import { fieldValidator, isEmptyErrors } from './helpers/validation';
import { buildInitialValues } from './helpers/helper';
import Form from './blocks/Form';

const CONFIGS_DEFAULT = {
  spacing: 20,
  theme: SEMANTIC_THEME,
  submitTitle: 'Submit',
  submitError: 'Please check your inputs!',
};

export default function TrainsForms({
  mode = EDIT_MODE,
  fields = [],
  values = {},
  options = {},
  configs = {},
  onSubmit = null,
}) {
  const spacingConfig = configs.spacing || CONFIGS_DEFAULT.spacing;
  const refinedConfigs = {
    spacing: spacingConfig,
    innerSpacing: configs.innerSpacing || (spacingConfig / 2),
    theme: configs.theme || CONFIGS_DEFAULT.theme,
    submitTitle: configs.submitTitle || CONFIGS_DEFAULT.submitTitle,
    submitError: configs.submitError || CONFIGS_DEFAULT.submitError,
  };

  const [formValues, setFormValues] = useState(buildInitialValues(values, fields));
  const [formErrors, setFormErrors] = useState({});
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
    const targetField = fields.find((field) => field.name === name);
    const message = fieldValidator(targetField, value);
    onChangeError(name, message);
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
      onSubmit();
    } else {
      setHasSubmitError(true);
    }
  };

  const context = {
    mode,
    fields,
    options,
    configs: refinedConfigs,
    values: formValues,
    errors: formErrors,
    actions: {
      onChange,
      preSubmit,
      onSubmit,
    },
    hasSubmitError,
  };

  return (
    <Context.Provider value={context}>
      <div style={{ padding: refinedConfigs.innerSpacing }}>
        <Form />
      </div>
    </Context.Provider>
  );
}

TrainsForms.propTypes = {
  mode: Types.MODE_TYPE,
  fields: Types.FIELDS_TYPE,
  values: Types.VALUES_TYPE,
  options: Types.FORM_OPTIONS_TYPE,
  configs: Types.CONFIGS_TYPE,
  onSubmit: PropTypes.func,
};
