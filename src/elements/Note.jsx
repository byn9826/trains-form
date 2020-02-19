import React, { useContext } from 'react';
import { SEMANTIC_THEME } from '../helpers/constants';
import Context from '../helpers/context';
import * as Types from '../helpers/types';

export default function Note({ field, disabled, elementStyle }) {
  const { values, configs, actions } = useContext(Context);

  switch (configs.theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <textarea
          rows="5"
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

Note.propTypes = Types.ELEMENT_TYPE;
