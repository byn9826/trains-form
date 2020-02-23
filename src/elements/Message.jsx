import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Message({ style, value, theme }) {
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return <p style={style}>{value}</p>;
  }
}

Message.propTypes = Types.ELEMENT_TYPE;
