import React, { useContext } from 'react';
import { SEMANTIC_THEME } from '../helpers/constants';
import Context from '../helpers/context';
import * as Types from '../helpers/types';

export default function Message({ field, elementStyle }) {
  const { values, configs } = useContext(Context);

  switch (configs.theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <p style={elementStyle}>
          {values[field.name]}
        </p>
      );
  }
}

Message.propTypes = {
  field: Types.FIELD_TYPE,
  elementStyle: Types.STYLE_TYPE,
};
