import React from 'react';
import { render } from 'react-dom';
import TrainsForms from '../src/TrainsForms';

const App = () => (
  <>
    <TrainsForms
      data={{}}
      fields={[]}
    />
  </>
);

render(<App />, document.getElementById('app'));
