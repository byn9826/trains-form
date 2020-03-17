import React, { useContext } from 'react';
import { SEMANTIC_THEME, EDIT_MODE } from '../helpers/constants';
import Context from '../helpers/context';
import { buildClassNames } from '../helpers/builder';
import Field from './Field';

export default function Form() {
  const {
    mode,
    configs,
    fields,
    actions,
    hasSubmitError,
  } = useContext(Context);

  switch (configs.theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <form
          className="ui form"
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
                <button
                  type="submit"
                  className={buildClassNames({
                    'ui primary button': true,
                    disabled: hasSubmitError,
                  })}
                >
                  {configs.submitTitle}
                </button>
              </div>
            )
          }
        </form>
      );
  }
}
