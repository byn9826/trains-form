import React from 'react';
import { render } from 'react-dom';
import TrainsForms from '../src/trains-forms';

const fields = [
  {
    type: 'TEXT',
    name: 'user_name',
    label: 'User Name With Label',
  },
  {
    type: 'TEXT',
    name: 'user_name',
  },
];

const App = () => {
  const existingData = {
    user_name: 'Tester A',
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
