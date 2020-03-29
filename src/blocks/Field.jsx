import React, { useContext } from 'react';
import * as Types from '../helpers/types';
import {
  VIEW_MODE,
  SEMANTIC_THEME,
  BOOTSTRAP_THEME,
} from '../helpers/constants';
import Context from '../helpers/context';
import { isNumber } from '../helpers/utils';
import { buildClassNames } from '../helpers/builder';
import Element from './Element';
import Title from '../elements/base/Title';
import Hint from '../elements/base/Hint';

export default function Field({ field }) {
  const {
    configs,
    mode,
    theme,
    errors,
  } = useContext(Context);
  const disabled = mode === VIEW_MODE || field.disabled;
  const error = errors[field.name];

  let containerStyle = isNumber(field.width) && field.width < 100 ? {
    display: 'inline-block',
    width: `${field.width}%`,
    verticalAlign: 'top',
  } : {
    display: 'block',
    width: '100%',
  };
  containerStyle = {
    ...containerStyle,
    marginTop: configs.innerSpacing,
    marginBottom: configs.innerSpacing,
    paddingLeft: configs.innerSpacing,
    paddingRight: configs.innerSpacing,
  };

  const titleRender = (required) => (
    <Title
      title={field.title}
      required={required}
    />
  );

  const elementRender = () => (
    <Element
      field={field}
      disabled={disabled}
    />
  );

  const errorRender = () => (
    <Hint
      theme={theme}
      title={error}
    />
  );

  switch (theme) {
    case BOOTSTRAP_THEME:
      return (
        <div className="form-group" style={containerStyle}>
          {titleRender(field.required)}
          {elementRender()}
          {errorRender()}
        </div>
      );
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className={buildClassNames({
            field: true,
            required: field.required,
          })}
          style={containerStyle}
        >
          {titleRender()}
          <div
            className={buildClassNames({
              field: true,
              disabled,
              error,
            })}
          >
            {elementRender()}
          </div>
          {errorRender()}
        </div>
      );
  }
}

Field.propTypes = {
  field: Types.FIELD_TYPE,
};
