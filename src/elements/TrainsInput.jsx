import React from 'react';
import { Input as SemanticInput } from 'semantic-ui-react';
import { defaultProps, propTypes } from '../helpers/types';

const TrainsInput = ({ data, field, configs }) => {
  const inputStyle = {
    display: 'block',
    marginTop: field.label ? configs.innerSpacing / 2 : 'auto',
  };
  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <SemanticInput
          style={inputStyle}
          key={field.name}
          name={field.name}
          value={data[field.name]}
        />
      );
  }
};

TrainsInput.defaultProps = defaultProps;
TrainsInput.propTypes = propTypes;

export default TrainsInput;
