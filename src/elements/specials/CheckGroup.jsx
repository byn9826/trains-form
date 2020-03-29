import React from 'react';
import * as Types from '../../helpers/types';
import { getCheckGroupClasses } from '../../helpers/theme';

export default function CheckGroup({
  type,
  disabled,
  style,
  name,
  options = [],
  theme,
  onClick,
  error,
  isChecked,
}) {
  const classNames = getCheckGroupClasses(type, theme, error);

  const onChange = (option) => {
    if (disabled) return;
    onClick(option);
  };

  return (
    <div
      className={classNames.group}
      style={{
        ...style,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {
        options.map((option) => (
          <div
            key={option.value}
            className={classNames.container}
            onClick={() => onChange(option)}
            onKeyDown={() => onChange(option)}
            role="button"
          >
            <div className={classNames.check}>
              <input
                type={type.toLowerCase()}
                name={name}
                checked={isChecked(option)}
                readOnly
                tabIndex="0"
                disabled={disabled}
                className={classNames.input}
              />
              <label className={classNames.label}>
                {option.label}
              </label>
            </div>
          </div>
        ))
      }
    </div>
  );
}

CheckGroup.propTypes = Types.ELEMENT_TYPE;
