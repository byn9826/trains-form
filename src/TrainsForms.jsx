import React from 'react';
import TrainsContext from './helpers/context';
import * as Props from './helpers/props';
import FormWrapper from './wrappers/FormWrapper';

const TrainsForms = ({
  data, fields, configs,
}) => {
  const refinedConfigs = {
    ...configs,
    innerSpacing: configs.innerSpacing || configs.spacing / 2,
  };

  const context = {
    data,
    fields,
    configs: refinedConfigs,
  };

  return (
    <TrainsContext.Provider value={context}>
      <div
        style={{
          paddingLeft: configs.innerSpacing,
          paddingRight: configs.innerSpacing,
          paddingTop: configs.innerSpacing,
          paddingBottom: configs.innerSpacing,
        }}
      >
        <FormWrapper />
      </div>
    </TrainsContext.Provider>
  );
};

export default TrainsForms;

TrainsForms.defaultProps = {
  data: Props.dataDefault,
  fields: Props.fieldsDefault,
  configs: Props.configsDefault,
};

TrainsForms.propTypes = {
  data: Props.dataTypes,
  fields: Props.fieldsTypes,
  configs: Props.configsTypes,
};
