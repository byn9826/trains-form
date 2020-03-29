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
import Elements from '../elements';
import Title from '../elements/base/Title';
import Hint from '../elements/base/Hint';

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

  const titleRender = (required) => (
    <Title
      title={field.title}
      required={required}
    />
  );

  const elementRender = () => {
    const elements = {
      [TEXT_TYPE]: Elements.Input,
      [NUMBER_TYPE]: Elements.Input,
      [INTEGER_TYPE]: Elements.Integer,
      [NOTE_TYPE]: Elements.Note,
      [PASSWORD_TYPE]: Elements.Password,
      [TOGGLE_TYPE]: Elements.Toggle,
      [RADIO_TYPE]: Elements.Radio,
      [CHECKBOX_TYPE]: Elements.Checkbox,
      [SWITCH_TYPE]: Elements.Switch,
      [SINGLE_SELECT_TYPE]: Elements.Dropdown,
      [MESSAGE_TYPE]: Elements.Message,
      [DATE_TYPE]: Elements.Calendar,
    };

    const matchedElement = elements[field.type];
    const Element = viewAsMessage || !matchedElement
      ? Elements.Message
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
        error={error}
      />
    );
  };

  const errorRender = () => (
    <Hint
      theme={theme}
      title={error}
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
              error,
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
