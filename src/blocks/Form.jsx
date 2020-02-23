import React, { useContext } from 'react';
import { SEMANTIC_THEME } from '../helpers/constants';
import Context from '../helpers/context';
import Field from './Field';

export default function Form() {
  const { configs, fields } = useContext(Context);

  switch (configs.theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <form className="ui form">
          {fields.map((field) => <Field key={field.name} field={field} />)}
        </form>
      );
  }
}
