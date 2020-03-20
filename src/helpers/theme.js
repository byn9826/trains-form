import { BOOTSTRAP_THEME, SEMANTIC_THEME, RADIO_TYPE } from './constants';
import { buildClassNames } from './builder';

export const getFieldClass = (theme, error) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = buildClassNames({
        'form-control': true,
        'is-invalid': error,
      });
      break;
    case SEMANTIC_THEME:
    default:
      className = null;
      break;
  }
  return className;
};

export const getButtonClass = (theme, disabled) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = 'btn btn-primary';
      break;
    case SEMANTIC_THEME:
    default:
      className = buildClassNames({
        'ui primary button': true,
        disabled,
      });
      break;
  }
  return className;
};

export const getLoaderClass = (theme) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = 'spinner-border';
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui active loader medium';
      break;
  }
  return className;
};

export const getHintClass = (theme) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = 'invalid-feedback';
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui pointing red basic label';
      break;
  }
  return className;
};

export const getMessageClass = (theme, disabled) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = disabled ? 'text-muted' : null;
      break;
    case SEMANTIC_THEME:
    default:
      className = null;
      break;
  }
  return className;
};

export const getFormClass = (theme) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = null;
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui form';
      break;
  }
  return className;
};

export const getToggleClasses = (theme) => {
  let classNames;
  switch (theme) {
    case BOOTSTRAP_THEME:
      classNames = {
        toggle: 'custom-control custom-switch',
        toggleInput: 'custom-control-input',
        toggleLabel: 'custom-control-label',
      };
      break;
    case SEMANTIC_THEME:
    default:
      classNames = {
        toggle: 'ui toggle checkbox',
        toggleInput: null,
        toggleLabel: null,
      };
      break;
  }
  return classNames;
};

export const getCheckGroupClasses = (type, theme, error) => {
  let classNames;
  switch (theme) {
    case BOOTSTRAP_THEME:
      classNames = {
        group: null,
        container: null,
        check: 'form-check form-check-inline',
        input: buildClassNames({
          'form-check-input': true,
          'is-invalid': error,
        }),
        label: 'form-check-label',
      };
      break;
    case SEMANTIC_THEME:
    default:
      classNames = {
        group: 'inline fields',
        container: 'field',
        check: buildClassNames({
          'ui checkbox': true,
          radio: type === RADIO_TYPE,
        }),
        input: 'hidden',
        label: null,
      };
      break;
  }
  return classNames;
};

export const getDropdownClasses = (theme, disabled, error) => {
  let classNames;
  switch (theme) {
    case BOOTSTRAP_THEME:
      classNames = {
        group: buildClassNames({
          'form-control dropdown': true,
          'is-invalid': error,
        }),
        menu: 'dropdown-menu',
        item: 'dropdown-item',
        text: 'text-capitalize',
        placeholder: 'text-muted',
        popup: 'dropdown-menu',
      };
      break;
    case SEMANTIC_THEME:
    default:
      classNames = {
        group: buildClassNames({
          'ui selection dropdown': true,
          disabled,
        }),
        menu: 'menu',
        item: 'item',
        text: 'text',
        placeholder: 'default text',
        popup: null,
      };
      break;
  }
  return classNames;
};
