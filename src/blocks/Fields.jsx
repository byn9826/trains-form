import React, { useContext } from 'react';
import classNames from 'classnames';
import {
  AUTO_MARGIN,
  VIEW_MODE,
  SEMANTIC_THEME,
  TEXT_TYPE,
  NUMBER_TYPE,
  NOTE_TYPE,
  MESSAGE_TYPE,
} from '../helpers/constants';
import Context from '../helpers/context';
import Input from '../elements/Input';
import Note from '../elements/Note';
import Message from '../elements/Message';

export default function Fields() {
  const {
    fields, configs, mode, errors,
  } = useContext(Context);

  return fields.map((field) => {
    const elementStyle = {
      marginTop: field.label ? configs.innerSpacing / 2 : AUTO_MARGIN,
    };
    const isDisabled = mode === VIEW_MODE || field.disabled;
    let element;
    switch (field.type) {
      case TEXT_TYPE:
      case NUMBER_TYPE:
        element = (
          <Input
            type={field.type}
            field={field}
            disabled={isDisabled}
            elementStyle={elementStyle}
          />
        );
        break;
      case NOTE_TYPE:
        element = <Note field={field} disabled={isDisabled} elementStyle={elementStyle} />;
        break;
      case MESSAGE_TYPE:
      default:
        element = <Message field={field} elementStyle={elementStyle} />;
        break;
    }
    if (fields.type !== MESSAGE_TYPE) {
      element = (
        <div className={classNames('field', { disabled: isDisabled })}>
          {element}
        </div>
      );
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
      case SEMANTIC_THEME:
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
