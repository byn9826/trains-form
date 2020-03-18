import { BOOTSTRAP_THEME, SEMANTIC_THEME } from './constants';
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
