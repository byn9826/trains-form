import React from 'react';
import { defaultProps, propTypes } from '../helpers/types';

const FieldWrapper = ({
  field, configs, children,
}) => {
  const content = field.label ? (
    <label>
      {field.label}
      {children}
    </label>
  ) : children;
  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <div
          style={{
            marginTop: configs.innerSpacing,
            marginBottom: configs.innerSpacing,
          }}
        >
          {content}
        </div>
      );
  }
};

FieldWrapper.defaultProps = defaultProps;
FieldWrapper.propTypes = propTypes;

export default FieldWrapper;
