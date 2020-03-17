import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Types from './helpers/types';
import { VIEW_MODE, EDIT_MODE, SEMANTIC_THEME } from './helpers/constants';
import Context from './helpers/context';
import { fieldValidator, isEmptyErrors } from './helpers/validation';
import { buildInitialValues, buildErrors } from './helpers/builder';
import { isFunction, isBoolean } from './helpers/utils';
import Form from './blocks/Form';
import Loader from './elements/components/Loader';

const CONFIGS_DEFAULT = {
  spacing: 20,
  theme: SEMANTIC_THEME,
  validateOnInitial: false,
  validateOnChange: true,
  viewAsMessage: false,
  submitTitle: 'Submit',
  submitError: 'Please check your inputs!',
  requiredError: 'This field is required.',
};

export default function Main({
  mode = EDIT_MODE,
  fields = [],
  values = {},
  options = {},
  configs = {},
  onSubmit = null,
  isLoading = false,
}) {
  const spacingConfig = configs.spacing || CONFIGS_DEFAULT.spacing;
  const combinedConfigs = {
    spacing: spacingConfig,
    innerSpacing: configs.innerSpacing || (spacingConfig / 2),
    theme: configs.theme || CONFIGS_DEFAULT.theme,
    submitTitle: configs.submitTitle || CONFIGS_DEFAULT.submitTitle,
    submitError: configs.submitError || CONFIGS_DEFAULT.submitError,
    requiredError: configs.requiredError || CONFIGS_DEFAULT.requiredError,
    allowSubmitButton: isFunction(onSubmit),
    validateOnInitial: isBoolean(configs.validateOnInitial)
      ? configs.validateOnInitial
      : CONFIGS_DEFAULT.validateOnInitial,
    validateOnChange: isBoolean(configs.validateOnChange)
      ? configs.validateOnChange
      : CONFIGS_DEFAULT.validateOnChange,
    viewAsMessage: isBoolean(configs.viewAsMessage)
      ? configs.viewAsMessage
      : CONFIGS_DEFAULT.viewAsMessage,
  };

  const initialValues = buildInitialValues(values, fields);
  const initialErrors = combinedConfigs.validateOnInitial
    ? buildErrors(fields, initialValues, combinedConfigs)
    : {};

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [hasSubmitError, setHasSubmitError] = useState(false);

  useEffect(() => {
    const shouldUpdateValues = fields.find(
      (field) => initialValues[field.name] !== formValues[field.name],
    );
    if (shouldUpdateValues) {
      const newErrors = combinedConfigs.validateOnInitial
        ? buildErrors(fields, initialValues, combinedConfigs)
        : {};
      setFormValues(initialValues);
      setFormErrors(newErrors);
    }
  }, [initialValues]);

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

  const getFormErrors = () => buildErrors(fields, formValues, combinedConfigs);

  const onChange = (name, value) => {
    onChangeValue(name, value);
    if (combinedConfigs.validateOnChange) {
      const targetField = fields.find((field) => field.name === name);
      const message = fieldValidator(targetField, value, combinedConfigs);
      onChangeError(name, message);
    }
    setHasSubmitError(false);
  };

  const preSubmit = () => {
    const errors = getFormErrors();
    setFormErrors(errors);
    if (isEmptyErrors(errors)) {
      onSubmit(formValues);
    } else {
      setHasSubmitError(true);
    }
  };

  const getFormDetails = () => {
    const errors = getFormErrors();
    return {
      isReady: isEmptyErrors(errors),
      values: formValues,
      errors,
    };
  };

  const resetFormValues = () => {
    setFormValues(initialValues);
    setFormErrors(initialErrors);
  };

  const validateFormValues = () => setFormErrors(getFormErrors());

  const context = {
    mode: isLoading ? VIEW_MODE : mode,
    fields,
    options,
    configs: combinedConfigs,
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
      <div style={{ padding: combinedConfigs.innerSpacing }}>
        <Form />
        {isLoading && (
          <Loader theme={combinedConfigs.theme} />
        )}
      </div>
    </Context.Provider>
  );

  return [formRender, {
    getFormDetails,
    resetFormValues,
    validateFormValues,
  }];
}

Main.propTypes = {
  mode: Types.MODE_TYPE,
  fields: Types.FIELDS_TYPE,
  values: Types.VALUES_TYPE,
  options: Types.FORM_OPTIONS_TYPE,
  configs: Types.CONFIGS_TYPE,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};
