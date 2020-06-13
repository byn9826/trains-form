import React from 'react';
import CreatableSelect from 'react-select/creatable';
import * as Types from '../../helpers/types';

export default function Items({
  disabled,
  style,
  name,
  value,
  options = [],
  onChange,
  placeholder,
}) {
  const onSelect = (items) => {
    const result = items === null ? [] : items.map((item) => item.value);
    onChange(name, result);
  };

  const rebuildValues = (items) => items.map((item) => {
    const preItem = options.find((option) => option.value === item);
    return preItem || { label: item, value: item };
  });

  return (
    <CreatableSelect
      isClearable
      isMulti
      value={rebuildValues(value)}
      onChange={onSelect}
      options={options}
      disabled={disabled}
      placeholder={placeholder}
      style={style}
      name={name}
    />
  );
}

Items.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: Types.ARRAY_VALUE_TYPE,
};
