import React, { useState } from 'react';
import * as Types from './helpers/types';
import {
  EDIT_MODE,
  CONFIGS_DEFAULT,
  TEXT_TYPE,
  NOTE_TYPE,
} from './helpers/constants';
import Context from './helpers/context';
import Form from './blocks/Form';

export default function TrainsForms({
  mode = EDIT_MODE,
  fields = [],
  values = {},
  configs = CONFIGS_DEFAULT,
}) {
  // Prepare configs
  const refinedConfigs = {
    ...configs,
    innerSpacing: configs.innerSpacing || (configs.spacing / 2),
  };

  // Prepare values
  const initValues = { ...values };
  fields.forEach((field) => {
    if (initValues[field.name] !== undefined) {
      return;
    }
    if (field.default !== undefined) {
      initValues[field.name] = field.default;
    } else if (field.type === TEXT_TYPE || field.type === NOTE_TYPE) {
      initValues[field.name] = '';
    }
  });

  const [formValues, setFormValues] = useState(initValues);
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

  const onChange = (field, value) => {
    if (field.max && value.length > field.max) {
      onChangeError(field.name, field.maxErrorMessage || `${field.max} characters Maximum`);
    } else if (field.min && value.length !== 0 && value.length < field.min) {
      onChangeError(field.name, field.minErrorMessage || `${field.min} characters Minimum`);
    } else {
      onChangeError(field.name, null);
    }
    onChangeValue(field.name, value);
  };

  const context = {
    mode,
    fields,
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
  configs: Types.CONFIGS_TYPE,
};
