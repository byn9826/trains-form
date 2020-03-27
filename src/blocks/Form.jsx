import React, { useContext } from 'react';
import { EDIT_MODE } from '../helpers/constants';
import { getFormClass, getAlertClass } from '../helpers/theme';
import Context from '../helpers/context';
import Field from './Field';
import Button from '../elements/components/Button';

export default function Form() {
  const {
    mode,
    theme,
    configs,
    fields,
    actions,
    hasSubmitError,
  } = useContext(Context);

  return (
    <form
      className={getFormClass(theme)}
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
                  className={getAlertClass(theme)}
                  style={{
                    marginRight: 10,
                    display: 'inline-block',
                  }}
                  role="alert"
                >
                  <p>{configs.submitError}</p>
                </div>
              )
            }
            <Button
              type="submit"
              theme={theme}
              title={configs.submitTitle}
              disabled={hasSubmitError}
            />
          </div>
        )
      }
    </form>
  );
}
