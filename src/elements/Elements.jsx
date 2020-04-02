import React from 'react';
import Items from './items';
import Field from '../blocks/Field';
import { TYPES } from '../helpers/constants';
import { getFormClass } from '../helpers/theme';
import * as Types from '../helpers/types';

function FormField({
  fieldType,
  name,
  title,
  required,
  placeholder,
  style,
  value,
  error,
  theme,
  options,
  onChange,
  disabled,
}) {
  const fieldRender = () => (
    <Field
      field={{
        name,
        type: fieldType,
        title,
        required,
        placeholder,
        disabled,
      }}
      style={style}
      value={value}
      error={error}
      theme={theme}
      options={options}
      onChange={onChange}
      disabled={disabled}
    />
  );

  const className = getFormClass(theme);

  return (
    <div className={className}>
      {fieldRender()}
    </div>
  );
}

const FormFields = {};
TYPES.forEach((type) => {
  FormFields[type] = (props) => FormField({ ...props, fieldType: type });
});

export default {
  ...Items,
  ...FormFields,
};

FormField.propTypes = Types.FIELD_TYPE;
