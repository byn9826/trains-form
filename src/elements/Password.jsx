import React, { useState } from 'react';
import classNames from 'classnames';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME, PASSWORD_TYPE, TEXT_TYPE } from '../helpers/constants';
import Input from './Input';

export default function Password({
  disabled,
  style,
  name,
  value,
  theme,
  onChange,
}) {
  const [isVisible, setIsVisible] = useState(false);

  /*
   * Note:
   * Password type disallow default value
   */
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div className="ui action input">
          <Input
            type={isVisible ? TEXT_TYPE : PASSWORD_TYPE}
            disabled={disabled}
            style={style}
            name={name}
            value={value}
            theme={theme}
            onChange={onChange}
          />
          <button
            type="button"
            className="ui icon button basic"
            onClick={() => setIsVisible(!isVisible)}
          >
            <i
              className={classNames('icon eye', {
                slash: isVisible,
              })}
            />
          </button>
        </div>
      );
  }
}

Password.propTypes = Types.ELEMENT_TYPE;
