import React from 'react';
import { render } from 'react-dom';
import TrainsForms from '../src/TrainsForms';

const fields = [
  {
    type: 'TEXT',
    name: 'user_name_1',
  },
  {
    type: 'TEXT',
    name: 'user_name_2',
    label: 'User Name with label',
  },
  {
    type: 'TEXT',
    name: 'user_name_3',
    label: 'User Name with width',
    width: 50,
  },
  {
    type: 'TEXT',
    name: 'user_name_4',
    label: 'User Name with required',
    width: 50,
    required: true,
  },
  {
    type: 'TEXT',
    name: 'user_name_5',
    label: 'User Name with placeholder',
    placeholder: 'User Name with placeholder',
  },
];

const App = () => {
  const existingData = {
    user_name_1: 'User Name without label',
  };
  return (
    <TrainsForms
      fields={fields}
      data={existingData}
      configs={{
        theme: 'Semantic',
        spacing: 30,
      }}
    />
  );
};
render(<App />, document.getElementById('app'));
