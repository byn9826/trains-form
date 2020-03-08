import React, { useContext } from 'react';
import * as Types from '../helpers/types';
import {
  VIEW_MODE,
  SEMANTIC_THEME,
} from '../helpers/constants';
import Context from '../helpers/context';
import { isNumber } from '../helpers/utils';
import { buildClassNames } from '../helpers/builder';
import Element from './Element';

export default function Field({ field }) {
  const { configs, mode, errors } = useContext(Context);
  const disabled = mode === VIEW_MODE || field.disabled;
  const error = errors[field.name];

  const containerStyle = isNumber(field.width) && field.width < 100 ? {
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
          className={buildClassNames({
            field: true,
            required: field.required,
          })}
          style={{
            ...containerStyle,
            marginTop: configs.innerSpacing,
            marginBottom: configs.innerSpacing,
            paddingLeft: configs.innerSpacing,
            paddingRight: configs.innerSpacing,
          }}
        >
          {field.title && <label>{field.title}</label>}
          <div
            className={buildClassNames({
              field: true,
              disabled,
              error,
            })}
          >
            <Element
              field={field}
              disabled={disabled}
            />
          </div>
          {
            error && (
              <div className="ui pointing red basic label" style={{ marginTop: 0 }}>
                {error}
              </div>
            )
          }
        </div>
      );
  }
}

Field.propTypes = {
  field: Types.FIELD_TYPE,
};
