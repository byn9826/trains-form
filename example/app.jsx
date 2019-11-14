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
    label: 'User Name with default value',
    default: 'Default User Name',
  },
  {
    type: 'Text',
    name: 'user_name_7',
    label: 'User Name with a maximum length validation',
    width: 50,
    max: 10,
  },
  {
    type: 'Text',
    name: 'user_name_8',
    label: 'User Name with a customized maximum error message',
    width: 50,
    max: 10,
    maxErrorMessage: 'No more than 10 characters!',
  },
  {
    type: 'Text',
    name: 'user_name_9',
    label: 'User Name with a minimum length validation',
    width: 50,
    min: 5,
  },
  {
    type: 'Text',
    name: 'user_name_10',
    label: 'User Name with a customized minimum error message',
    width: 50,
    min: 5,
    minErrorMessage: 'Less than 5 characters!',
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
