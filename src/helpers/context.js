import { createContext } from 'react';

const TrainsContext = createContext({
  data: {},
  fields: [],
  configs: {
    spacing: 20,
    innerSpacing: 10,
    theme: 'Semantic',
  },
});

export default TrainsContext;
