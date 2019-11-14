import React, { useContext } from 'react';
import classNames from 'classnames';
import TrainsContext from '../helpers/context';
import TrainsInput from '../fields/TrainsInput';

export default function FieldsWrapper() {
  const trainsContext = useContext(TrainsContext);
  const { fields, configs, errors } = trainsContext;

  return fields.map((field) => {
    let element = null;
    switch (field.type) {
      case 'Text':
        element = <TrainsInput field={field} />;
        break;
      default:
        return null;
    }
    const containerStyle = field.width && field.width < 100 ? {
      display: 'inline-block',
      width: `${field.width}%`,
      verticalAlign: 'top',
    } : {
      display: 'block',
      width: '100%',
    };
    switch (configs.theme) {
      case 'Semantic':
      default:
        return (
          <div
            className={classNames(
              'field',
              {
                required: field.required,
              },
            )}
            key={field.name}
            style={{
              ...containerStyle,
              marginTop: configs.innerSpacing,
              marginBottom: configs.innerSpacing,
              paddingLeft: configs.innerSpacing,
              paddingRight: configs.innerSpacing,
            }}
          >
            {
              field.label && (
                <label>{field.label}</label>
              )
            }
            {element}
            {
              errors[field.name] && (
                <div className="ui pointing red basic label">
                  {errors[field.name]}
                </div>
              )
            }
          </div>
        );
    }
  });
}
