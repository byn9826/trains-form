import React, { useContext } from 'react';
import TrainsContext from '../helpers/context';
import * as Props from '../helpers/props';

const TrainsInput = ({ field }) => {
  const trainsContext = useContext(TrainsContext);
  const {
    fields, data, configs, actions,
  } = trainsContext;

  const inputStyle = {
    display: 'block',
    marginTop: fields.label ? configs.innerSpacing / 2 : 'auto',
  };
  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <input
          type="text"
          style={inputStyle}
          key={field.name}
          name={field.name}
          value={data[field.name]}
          placeholder={field.placeholder}
          onChange={(e) => {
            if (field.max && e.target.value.length > field.max) {
              actions.onChangeError(field.name, field.maxErrorMessage || `${field.max} characters Maximum`);
            } else {
              if (field.min && e.target.value.length !== 0 && e.target.value.length < field.min) {
                actions.onChangeError(field.name, field.minErrorMessage || `${field.min} characters Minimum`);
              } else {
                actions.onChangeError(field.name, null);
              }
              actions.onChangeValue(field.name, e.target.value);
            }
          }}
        />
      );
  }
};

export default TrainsInput;

TrainsInput.defaultProps = {
  field: Props.fieldDefault,
};

TrainsInput.propTypes = {
  field: Props.fieldTypes,
};
