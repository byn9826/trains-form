import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import {
  TEXT_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  NOTE_TYPE,
  MESSAGE_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
  CHECKBOX_TYPE,
  SINGLE_SELECT_TYPE,
  DATE_TYPE,
} from '../helpers/constants';
import Context from '../helpers/context';
import Input from '../elements/Input';
import Password from '../elements/Password';
import Note from '../elements/Note';
import Toggle from '../elements/Toggle';
import Message from '../elements/Message';
import Radio from '../elements/Radio';
import Dropdown from '../elements/Dropdown';
import Checkbox from '../elements/Checkbox';
import Calendar from '../elements/Calendar';

export default function Element({ field, disabled }) {
  const {
    configs,
    values,
    options,
    actions,
  } = useContext(Context);

  const elements = {
    [TEXT_TYPE]: Input,
    [NUMBER_TYPE]: Input,
    [NOTE_TYPE]: Note,
    [PASSWORD_TYPE]: Password,
    [TOGGLE_TYPE]: Toggle,
    [RADIO_TYPE]: Radio,
    [CHECKBOX_TYPE]: Checkbox,
    [SINGLE_SELECT_TYPE]: Dropdown,
    [MESSAGE_TYPE]: Message,
    [DATE_TYPE]: Calendar,
  };

  let TargetElement;
  if (configs.viewAsMessage) {
    TargetElement = Message;
  } else {
    TargetElement = elements[field.type] || Message;
  }

  return (
    <TargetElement
      field={field}
      disabled={disabled}
      theme={configs.theme}
      value={values[field.name]}
      options={options[field.name]}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder}
      onChange={actions.onChange}
      style={{
        marginTop: field.label ? configs.innerSpacing / 2 : 'auto',
      }}
    />
  );
}

Element.propTypes = {
  field: Types.FIELD_TYPE,
  disabled: PropTypes.bool,
};
