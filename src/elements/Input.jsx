import React, { useContext } from 'react';
import { SEMANTIC_THEME } from '../helpers/constants';
import Context from '../helpers/context';
import * as Types from '../helpers/types';

export default function Input({ field, disabled, elementStyle }) {
  const { values, configs, actions } = useContext(Context);

  switch (configs.theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <input
          type="text"
          style={elementStyle}
          key={field.name}
          disabled={disabled}
          name={field.name}
          value={values[field.name]}
          placeholder={field.placeholder}
          onChange={(e) => actions.onChange(field, e.target.value)}
        />
      );
  }
}

Input.propTypes = Types.ELEMENT_TYPE;
