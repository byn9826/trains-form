import React from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { getToggleClasses } from '../helpers/theme';

export default function Toggle({
  disabled,
  style,
  name,
  placeholder,
  value,
  theme,
  onChange,
}) {
  const classNames = getToggleClasses(theme);

  const onToggle = (e) => {
    e.stopPropagation();
    if (disabled) return;
    onChange(name, !value);
  };

  return (
    <div
      className={classNames.toggle}
      style={style}
      onClick={onToggle}
      onKeyDown={onToggle}
      role="button"
    >
      <input
        className={classNames.toggleInput}
        tabIndex={0}
        type="checkbox"
        disabled={disabled}
        name={name}
        checked={value}
        onChange={onToggle}
      />
      <label className={classNames.toggleLabel}>
        {placeholder}
      </label>
    </div>
  );
}

Toggle.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.bool,
};
