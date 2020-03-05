import React, { useState } from 'react';
import * as Types from './helpers/types';
import { EDIT_MODE, SEMANTIC_THEME } from './helpers/constants';
import Context from './helpers/context';
import { fieldValidator } from './helpers/validation';
import { buildInitialValues } from './helpers/helper';
import Form from './blocks/Form';

const CONFIGS_DEFAULT = {
  spacing: 20,
  theme: SEMANTIC_THEME,
};

export default function TrainsForms({
  mode = EDIT_MODE,
  fields = [],
  values = {},
  options = {},
  configs = {},
}) {
  const themeConfig = configs.theme || CONFIGS_DEFAULT.theme;
  const spacingConfig = configs.spacing || CONFIGS_DEFAULT.spacing;
  const refinedConfigs = {
    theme: themeConfig,
    spacing: spacingConfig,
    innerSpacing: configs.innerSpacing || (spacingConfig / 2),
  };

  const [formValues, setFormValues] = useState(buildInitialValues(values, fields));
  const [formErrors, setFormErrors] = useState({});

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
    },
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
};
