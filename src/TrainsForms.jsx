import React, { useState } from 'react';
import TrainsContext from './helpers/context';
import * as Props from './helpers/props';
import FormWrapper from './wrappers/FormWrapper';

const TrainsForms = ({ mode, fields, configs }) => {
  const refinedConfigs = {
    ...configs,
    innerSpacing: configs.innerSpacing || configs.spacing / 2,
  };

  const initData = {};
  switch (mode) {
    case 'Creation': {
      fields.forEach((field) => {
        let defaultValue = null;
        if (field.default) {
          defaultValue = field.default;
        } else if (field.type === 'Text') {
          defaultValue = '';
        }
        initData[field.name] = defaultValue;
      });
      break;
    }
    default:
      break;
  }

  const [data, setData] = useState(initData);
  const [errors, setErrors] = useState({});

  const onChangeValue = (name, value) => {
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const onChangeError = (name, value) => {
    const newErrors = { ...errors };
    newErrors[name] = value;
    setErrors(newErrors);
  };

  const context = {
    data,
    errors,
    fields,
    configs: refinedConfigs,
    actions: {
      onChangeValue, onChangeError,
    },
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
  mode: Props.modeDefault,
  fields: Props.fieldsDefault,
  configs: Props.configsDefault,
};

TrainsForms.propTypes = {
  mode: Props.modeTypes,
  fields: Props.fieldsTypes,
  configs: Props.configsTypes,
};
