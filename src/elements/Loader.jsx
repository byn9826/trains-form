import React from 'react';
import { SEMANTIC_THEME } from '../helpers/constants';
import * as Types from '../helpers/types';

export default function Loader({ theme }) {
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div className="ui active loader medium" />
      );
  }
}

Loader.propTypes = {
  theme: Types.THEME_TYPE,
};
