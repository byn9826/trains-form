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
  const containerStyle = field.width && field.width < 100 ? {
    display: 'inline-block',
    width: `${field.width}%`,
  } : {
    display: 'block',
    width: '100%',
  };
  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <div
          style={{
            ...containerStyle,
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
