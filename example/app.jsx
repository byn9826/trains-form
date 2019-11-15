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

const fields1 = [
  {
    type: 'Label',
    name: 'label_1',
    label: 'Label 1',
  },
  {
    type: 'Label',
    name: 'label_2',
    label: 'Label 2',
    width: 50,
  },
  {
    type: 'Label',
    name: 'label_3',
    label: 'Label 3',
    width: 50,
    default: 'Value from default',
  },
];

const initData1 = {
  label_1: 'Label Type Element',
  label_2: 'Label with value',
};

const App = () => (
  <>
    <TrainsForms
      fields={fields}
      mode="Creation"
      configs={{
        theme: 'Semantic',
        spacing: 30,
      }}
    />
    <TrainsForms
      fields={fields1}
      data={initData1}
      mode="View"
    />
  </>
);

render(<App />, document.getElementById('app'));
