import React from 'react';
import { render } from 'react-dom';
import TrainsForms from '../src/TrainsForms';

const fields = [
  {
    type: 'Text',
    name: 'user_name_1',
  },
  {
    type: 'Text',
    name: 'user_name_2',
    label: 'User Name with label',
  },
  {
    type: 'Text',
    name: 'user_name_3',
    label: 'User Name with width',
    width: 50,
  },
  {
    type: 'Text',
    name: 'user_name_4',
    label: 'User Name with required',
    width: 50,
    required: true,
  },
  {
    type: 'Text',
    name: 'user_name_5',
    label: 'User Name with placeholder',
    placeholder: 'User Name with placeholder',
  },
  {
    type: 'Text',
    name: 'user_name_6',
    label: 'User Name with tip',
  },
  {
    type: 'Text',
    name: 'user_name_7',
    label: 'User Name with default value',
    default: 'Default User Name',
  },
];

const App = () => (
  <TrainsForms
    fields={fields}
    mode="Creation"
    configs={{
      theme: 'Semantic',
      spacing: 30,
    }}
  />
);

render(<App />, document.getElementById('app'));
