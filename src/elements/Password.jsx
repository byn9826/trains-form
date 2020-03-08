import React, { useState } from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME, PASSWORD_TYPE, TEXT_TYPE } from '../helpers/constants';
import { buildClassNames } from '../helpers/builder';
import Input from './Input';

export default function Password({
  disabled,
  style,
  name,
  value,
  theme,
  onChange,
  placeholder,
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
            style={{
              ...style,
              width: 'calc(100% - 40px)',
            }}
            name={name}
            value={value}
            theme={theme}
            placeholder={placeholder}
            onChange={onChange}
          />
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

Password.propTypes = Types.ELEMENT_TYPE;
