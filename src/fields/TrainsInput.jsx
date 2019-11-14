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
            actions.onChange(e.target.name, e.target.value);
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
