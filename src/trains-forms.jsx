import React from 'react';
import { defaultProps, propTypes } from './helpers/types';
import FieldWrapper from './blocks/FieldWrapper';
import TrainsInput from './elements/TrainsInput';

const TrainsForms = ({
  data, fields, configs,
}) => {
  const refinedConfigs = {
    ...configs,
    innerSpacing: configs.innerSpacing || configs.spacing / 2,
  };
  const fieldsElements = fields.map((field) => {
    let element = null;
    switch (field.type) {
      case 'TEXT':
        element = (
          <TrainsInput data={data} field={field} configs={refinedConfigs} />
        );
        break;
      default:
        return null;
    }
    return (
      <FieldWrapper key={field.name} field={field} configs={refinedConfigs}>
        {element}
      </FieldWrapper>
    );
  });
  return (
    <form
      style={{
        paddingLeft: configs.spacing,
        paddingRight: configs.spacing,
        paddingTop: configs.innerSpacing,
        paddingBottom: configs.innerSpacing,
      }}
    >
      {fieldsElements}
    </form>
  );
};

TrainsForms.defaultProps = defaultProps;
TrainsForms.propTypes = propTypes;

export default TrainsForms;
