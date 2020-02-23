import React, { useContext } from 'react';
import * as Types from '../helpers/types';
import {
  TEXT_TYPE,
  NUMBER_TYPE,
  PASSWORD_TYPE,
  NOTE_TYPE,
  MESSAGE_TYPE,
} from '../helpers/constants';
import Context from '../helpers/context';
import Input from '../elements/Input';
import Note from '../elements/Note';
import Password from '../elements/Password';
import Message from '../elements/Message';

export default function Element({ field, disabled }) {
  const { configs, values, actions } = useContext(Context);

  const propsBase = {
    field,
    disabled,
    theme: configs.theme,
    value: values[field.name],
    name: field.name,
    type: field.type,
    placeholder: field.placeholder,
    onChange: actions.onChange,
    style: {
      marginTop: field.label ? configs.innerSpacing / 2 : 'auto',
    },
  };

  switch (field.type) {
    case TEXT_TYPE:
    case NUMBER_TYPE:
      return <Input {...propsBase} />;
    case NOTE_TYPE:
      return <Note {...propsBase} />;
    case PASSWORD_TYPE:
      return <Password {...propsBase} />;
    case MESSAGE_TYPE:
    default:
      return <Message {...propsBase} />;
  }
}

Element.propTypes = {
  field: Types.FIELD_TYPE,
  disabled: Types.DISABLE_TYPE,
};
