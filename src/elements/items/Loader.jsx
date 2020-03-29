import React from 'react';
import * as Types from '../../helpers/types';
import { getLoaderClass } from '../../helpers/theme';

export default function Loader({ theme }) {
  return (
    <div
      className={getLoaderClass(theme)}
      role="status"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
    />
  );
}

Loader.propTypes = {
  theme: Types.THEME_TYPE,
};
