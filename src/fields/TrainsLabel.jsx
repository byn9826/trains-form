import React, { useContext } from 'react';
import TrainsContext from '../helpers/context';
import * as Props from '../helpers/props';

const TrainsLabel = ({ field, elementStyle }) => {
  const trainsContext = useContext(TrainsContext);
  const { data, configs } = trainsContext;

  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <p style={elementStyle}>
          {data[field.name]}
        </p>
      );
  }
};

export default TrainsLabel;

TrainsLabel.defaultProps = {
  field: Props.fieldDefault,
  elementStyle: Props.styleDefault,
};

TrainsLabel.propTypes = {
  field: Props.fieldTypes,
  elementStyle: Props.styleTypes,
};
