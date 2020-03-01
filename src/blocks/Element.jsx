import React, { useContext } from 'react';
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
} from '../helpers/constants';
import Context from '../helpers/context';
import Input from '../elements/Input';
import Password from '../elements/Password';
import Note from '../elements/Note';
import Toggle from '../elements/Toggle';
import Message from '../elements/Message';
import Radio from '../elements/Radio';
import Checkbox from '../elements/Checkbox';

export default function Element({ field, disabled }) {
  const {
    configs,
    values,
    options,
    actions,
  } = useContext(Context);

  let TargetElement;
  switch (field.type) {
    case TEXT_TYPE:
    case NUMBER_TYPE:
      TargetElement = Input;
      break;
    case NOTE_TYPE:
      TargetElement = Note;
      break;
    case PASSWORD_TYPE:
      TargetElement = Password;
      break;
    case TOGGLE_TYPE:
      TargetElement = Toggle;
      break;
    case RADIO_TYPE:
      TargetElement = Radio;
      break;
    case CHECKBOX_TYPE:
      TargetElement = Checkbox;
      break;
    case MESSAGE_TYPE:
    default:
      TargetElement = Message;
      break;
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
  disabled: Types.DISABLE_TYPE,
};
