import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import {
  SEMANTIC_THEME,
  BOOTSTRAP_THEME,
  TEXT_TYPE,
  NUMBER_TYPE,
  INTEGER_TYPE,
  NOTE_TYPE,
  PASSWORD_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
  SWITCH_TYPE,
  SINGLE_SELECT_TYPE,
  MESSAGE_TYPE,
  DATE_TYPE,
} from '../helpers/constants';
import { isNumber } from '../helpers/utils';
import { buildClassNames } from '../helpers/builder';
import Fields from '../elements/fields';
import Specials from '../elements/specials';

export default function Field({
  field,
  style,
  value,
  error,
  theme,
  options,
  onChange,
  disabled,
  viewAsMessage,
  space = 10,
}) {
  let containerStyle = isNumber(field.width) && field.width < 100 ? {
    display: 'inline-block',
    width: `${field.width}%`,
    verticalAlign: 'top',
  } : {
    display: 'block',
    width: '100%',
  };
  containerStyle = {
    ...containerStyle,
    marginTop: space,
    marginBottom: space,
    paddingLeft: space,
    paddingRight: space,
    ...style,
  };

  const fieldError = field.type === MESSAGE_TYPE ? null : error;

  const titleRender = (required) => (
    <Specials.Title
      title={field.title}
      required={required}
    />
  );

  const elementRender = () => {
    const elements = {
      [TEXT_TYPE]: Fields.Input,
      [NUMBER_TYPE]: Fields.Input,
      [INTEGER_TYPE]: Fields.Integer,
      [NOTE_TYPE]: Fields.Note,
      [PASSWORD_TYPE]: Fields.Password,
      [TOGGLE_TYPE]: Fields.Toggle,
      [RADIO_TYPE]: Fields.Radio,
      [CHECKBOX_TYPE]: Fields.Checkbox,
      [SWITCH_TYPE]: Fields.Switch,
      [SINGLE_SELECT_TYPE]: Fields.Dropdown,
      [MESSAGE_TYPE]: Fields.Message,
      [DATE_TYPE]: Fields.Calendar,
    };

    const matchedElement = elements[field.type];
    const Element = viewAsMessage || !matchedElement
      ? Fields.Message
      : matchedElement;

    return (
      <Element
        field={field}
        disabled={disabled}
        theme={theme}
        value={value}
        options={options}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        onChange={onChange}
        style={{
          marginTop: field.label ? space / 2 : 'auto',
        }}
        error={fieldError}
      />
    );
  };

  const errorRender = () => (
    <Specials.Hint
      theme={theme}
      title={fieldError}
    />
  );

  switch (theme) {
    case BOOTSTRAP_THEME:
      return (
        <div className="form-group" style={containerStyle}>
          {titleRender(field.required)}
          {elementRender()}
          {errorRender()}
        </div>
      );
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className={buildClassNames({
            field: true,
            required: field.required,
          })}
          style={containerStyle}
        >
          {titleRender()}
          <div
            className={buildClassNames({
              field: true,
              disabled,
              error: fieldError,
            })}
          >
            {elementRender()}
          </div>
          {errorRender()}
        </div>
      );
  }
}

Field.propTypes = {
  field: Types.FIELD_TYPE,
  theme: Types.THEME_TYPE,
  value: Types.VALUE_TYPE,
  options: Types.ELEMENT_OPTIONS_TYPE,
  style: Types.STYLE_TYPE,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  viewAsMessage: PropTypes.bool,
  space: PropTypes.number,
};
