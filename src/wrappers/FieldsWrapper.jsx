import React, { useContext } from 'react';
import classNames from 'classnames';
import TrainsContext from '../helpers/context';
import TrainsInput from '../fields/TrainsInput';
import TrainsLabel from '../fields/TrainsLabel';

export default function FieldsWrapper() {
  const trainsContext = useContext(TrainsContext);
  const {
    fields, configs, mode, errors,
  } = trainsContext;

  return fields.map((field) => {
    let element = null;
    const elementStyle = {
      marginTop: fields.label ? configs.innerSpacing / 2 : 'auto',
    };
    const disabled = mode === 'View' || field.disabled;
    switch (field.type) {
      case 'Text':
        element = (
          <div
            className={classNames('field', {
              disabled,
            })}
          >
            <TrainsInput field={field} elementStyle={elementStyle} />
          </div>
        );
        break;
      case 'Label':
        element = <TrainsLabel field={field} elementStyle={elementStyle} />;
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
            className={classNames('field', {
              required: field.required,
            })}
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
              field.title && (
                <label>{field.title}</label>
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
