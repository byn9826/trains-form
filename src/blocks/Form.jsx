import React, { useContext } from 'react';
import { SEMANTIC_THEME, EDIT_MODE, BOOTSTRAP_THEME } from '../helpers/constants';
import Context from '../helpers/context';
import Field from './Field';
import Button from '../elements/components/Button';

export default function Form() {
  const {
    mode,
    configs,
    fields,
    actions,
    hasSubmitError,
  } = useContext(Context);

  let className;

  switch (configs.theme) {
    case BOOTSTRAP_THEME:
      className = null;
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui form';
      break;
  }

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        actions.preSubmit();
      }}
    >
      {fields.map((field) => <Field key={field.name} field={field} />)}
      {
        configs.allowSubmitButton
        && mode === EDIT_MODE
        && (
          <div style={{ display: 'block', textAlign: 'right' }}>
            {
              hasSubmitError && (
                <div
                  className="ui negative message compact"
                  style={{ marginRight: 10 }}
                >
                  <p>{configs.submitError}</p>
                </div>
              )
            }
            <Button
              theme={configs.theme}
              title={configs.submitTitle}
              disabled={hasSubmitError}
            />
          </div>
        )
      }
    </form>
  );
}
