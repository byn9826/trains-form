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
  {
    type: 'Text',
    name: 'user_name_11',
    label: 'Disabled User Name',
    width: 50,
    disabled: true,
  },
  {
    type: 'Label',
    name: 'user_name_12',
    label: 'User name in a label',
    default: 'A label in Edit Mode',
    width: 50,
  },
  {
    type: 'Text',
    name: 'user_name_13',
    label: 'User Name with init and default value',
    default: 'default value will be override',
  },
];

const initData = {
  user_name_13: 'This is init value',
};

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
  {
    type: 'Text',
    name: 'text_1',
    label: 'Text in view mode',
    width: 50,
  },
];

const initData1 = {
  label_1: 'Label Type Element',
  label_2: 'Label with value',
  text_1: 'Data for text_1',
};

const App = () => (
  <>
    <TrainsForms
      data={initData}
      fields={fields}
      mode="Edit"
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
