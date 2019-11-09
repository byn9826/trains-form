import React, { useContext } from 'react';
import { Form } from 'semantic-ui-react';
import TrainsContext from '../helpers/context';
import TrainsInput from '../fields/TrainsInput';

export default function FieldsWrapper() {
  const trainsContext = useContext(TrainsContext);
  const { fields, configs } = trainsContext;

  return fields.map((field) => {
    let element = null;
    switch (field.type) {
      case 'TEXT':
        element = <TrainsInput field={field} />;
        break;
      default:
        return null;
    }
    const containerStyle = field.width && field.width < 100 ? {
      display: 'inline-block',
      width: `${field.width}%`,
    } : {
      display: 'block',
      width: '100%',
    };
    switch (configs.theme) {
      case 'Semantic':
      default:
        return (
          <Form.Field
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
          </Form.Field>
        );
    }
  });
}
