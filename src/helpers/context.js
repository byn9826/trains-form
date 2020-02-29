import { createContext } from 'react';
import { EDIT_MODE, SEMANTIC_THEME } from './constants';

const Context = createContext({
  mode: EDIT_MODE,
  values: {},
  options: {},
  errors: {},
  fields: [],
  configs: {
    spacing: 20,
    innerSpacing: 10,
    theme: SEMANTIC_THEME,
  },
  actions: {
    onChange: () => {},
  },
});

export default Context;
