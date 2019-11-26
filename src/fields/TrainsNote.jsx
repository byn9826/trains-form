import React, { useContext } from 'react';
import TrainsContext from '../helpers/context';
import * as Props from '../helpers/props';

const TrainsNote = ({ field, disabled, elementStyle }) => {
  const trainsContext = useContext(TrainsContext);
  const { data, configs, actions } = trainsContext;
  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <textarea
          rows="5"
          style={elementStyle}
          key={field.name}
          disabled={disabled}
          name={field.name}
          value={data[field.name]}
          placeholder={field.placeholder}
          onChange={(e) => actions.onChange(field, e.target.value)}
        />
      );
  }
};

export default TrainsNote;

TrainsNote.defaultProps = Props.elementDefault;

TrainsNote.propTypes = Props.elementTypes;
