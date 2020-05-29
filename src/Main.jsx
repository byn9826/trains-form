import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Types from './helpers/types';
import { VIEW_MODE, EDIT_MODE, SEMANTIC_THEME } from './helpers/constants';
import {
  fieldValidator,
  isEmptyErrors,
  isCalendarType,
  isArrayType,
} from './helpers/validation';
import { buildInitialValues, buildErrors, buildFormFields } from './helpers/builder';
import { isFunction, isBoolean } from './helpers/utils';
import { getDateString } from './helpers/calendar';
import Form from './blocks/Form';
import Items from './elements/items';

const CONFIGS_DEFAULT = {
  spacing: 20,
  validateOnInitial: false,
  validateOnChange: true,
  viewAsMessage: false,
  submitTitle: 'Submit',
  submitError: 'Please check your inputs!',
  requiredError: 'This field is required.',
};

export default function Main({
  mode = EDIT_MODE,
  theme = SEMANTIC_THEME,
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

  const formFields = buildFormFields(fields);

  const [rawValues, setRawValues] = useState({});
  const [formValues, setFormValues] = useState(buildInitialValues({}, formFields));
  const [formErrors, setFormErrors] = useState({});
  const [hasSubmitError, setHasSubmitError] = useState(false);

  const setFormDetails = () => {
    const initialValues = buildInitialValues(values, formFields);
    const initialErrors = combinedConfigs.validateOnInitial
      ? buildErrors(formFields, initialValues, combinedConfigs)
      : {};
    setFormValues(initialValues);
    setFormErrors(initialErrors);
  };

  useEffect(() => {
    const shouldUpdateValues = formFields.find((field) => {
      const newValue = values[field.name];
      const oldValue = rawValues[field.name];
      if (isArrayType(field.type) && newValue && oldValue) {
        return newValue.length !== oldValue.length
          || newValue.find((v) => !oldValue.includes(v));
      }
      if (isCalendarType(field.type) && newValue && oldValue) {
        return getDateString(newValue) !== getDateString(oldValue);
      }
      return newValue !== oldValue;
    });
    if (shouldUpdateValues) {
      setFormDetails();
      setRawValues(values);
    }
  }, [values]);

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

  const getFormErrors = () => buildErrors(formFields, formValues, combinedConfigs);

  const onChange = (name, value) => {
    onChangeValue(name, value);
    if (combinedConfigs.validateOnChange) {
      const targetField = formFields.find((field) => field.name === name);
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

  const formRender = () => (
    <div style={{ padding: combinedConfigs.innerSpacing }}>
      <Form
        theme={theme}
        mode={isLoading ? VIEW_MODE : mode}
        options={options}
        fields={formFields}
        values={formValues}
        errors={formErrors}
        onChange={onChange}
        preSubmit={preSubmit}
        configs={combinedConfigs}
        hasSubmitError={hasSubmitError}
      />
      {isLoading && <Items.Loader theme={theme} />}
    </div>
  );

  const getFormDetails = () => {
    const errors = getFormErrors();
    return {
      isReady: isEmptyErrors(errors),
      values: formValues,
      errors,
    };
  };

  return [formRender, {
    getFormDetails,
    resetFormValues: setFormDetails,
    validateFormValues: () => setFormErrors(getFormErrors()),
  }];
}

Main.propTypes = {
  mode: Types.MODE_TYPE,
  theme: Types.THEME_TYPE,
  fields: Types.FIELDS_TYPE,
  values: Types.VALUES_TYPE,
  options: Types.FORM_OPTIONS_TYPE,
  configs: Types.CONFIGS_TYPE,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};
