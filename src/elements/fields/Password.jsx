import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from '../../helpers/types';
import {
  SEMANTIC_THEME,
  PASSWORD_TYPE,
  TEXT_TYPE,
  BOOTSTRAP_THEME,
} from '../../helpers/constants';
import { buildClassNames } from '../../helpers/builder';
import Input from './Input';

export default function Password({
  disabled,
  style,
  name,
  value,
  theme,
  onChange,
  placeholder,
  error,
}) {
  /*
   * Note:
   * Password type disallow default value
   */
  const [isVisible, setIsVisible] = useState(false);

  const inputRender = (themeStyle = {}) => (
    <Input
      type={isVisible ? TEXT_TYPE : PASSWORD_TYPE}
      disabled={disabled}
      style={{
        ...style,
        ...themeStyle,
      }}
      name={name}
      value={value}
      theme={theme}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
    />
  );

  switch (theme) {
    case BOOTSTRAP_THEME:
      return inputRender();
    case SEMANTIC_THEME:
    default:
      return (
        <div className="ui action input">
          {inputRender({ width: 'calc(100% - 40px)' })}
          <button
            type="button"
            style={{ width: 40 }}
            className="ui icon button basic"
            onClick={() => setIsVisible(!isVisible)}
          >
            <i
              className={buildClassNames({
                'icon eye': true,
                slash: isVisible,
              })}
            />
          </button>
        </div>
      );
  }
}

Password.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
