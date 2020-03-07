import { createContext } from 'react';

const Context = createContext({
  mode: '',
  values: {},
  options: {},
  errors: {},
  fields: [],
  configs: {},
  actions: {},
  hasSubmitError: false,
});

export default Context;
