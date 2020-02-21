import React, { useState } from 'react';
import * as Types from './helpers/types';
import {
  EDIT_MODE,
  CONFIGS_DEFAULT,
  TEXT_TYPE,
  NOTE_TYPE,
  NUMBER_TYPE,
} from './helpers/constants';
import Context from './helpers/context';
import { isDefined } from './helpers/utils';
import { fieldValidator } from './helpers/validation';
import Form from './blocks/Form';

export default function TrainsForms({
  mode = EDIT_MODE,
  fields = [],
  values = {},
  configs = CONFIGS_DEFAULT,
}) {
  const refinedConfigs = {
    ...configs,
    innerSpacing: configs.innerSpacing || (configs.spacing / 2),
  };

  const initValues = { ...values };
  fields.forEach((field) => {
    if (isDefined(initValues[field.name])) {
      return;
    }
    if (isDefined(field.default)) {
      initValues[field.name] = field.default;
    } else if (
      field.type === TEXT_TYPE
      || field.type === NOTE_TYPE
      || field.type === NUMBER_TYPE
    ) {
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
    onChangeValue(field.name, value);
    const message = fieldValidator(field, value);
    onChangeError(field.name, message);
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
