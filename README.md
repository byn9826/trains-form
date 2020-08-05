# TrainsForms
All in one React dynamic form builder, make form easier.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/byn9826/trains-forms/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/trains-forms)](https://www.npmjs.com/package/trains-forms)
## Install
```
npm install trains-forms --save;

// For theme: Semantic UI
npm install semantic-ui-css --save;
import 'semantic-ui-css/semantic.min.css';

// For theme: Bootstrap@4
npm install bootstrap --save;
import 'bootstrap/dist/css/bootstrap.min.css';
```
## Features
1. Render complex form by simple configs.
2. Easily switch between view and edit mode.
3. Built-in support for Semantic UI, Bootstrap.
4. Built-in configurable validations.
5. Built-in configurable error messages.
6. Built-in date picker.
7. Take advantage of standalone field components.
## How to use
[Demo & Example](https://byn9826.github.io/trains-forms)
### Simple Example
```
import useForm, { FORM_CONSTANTS };

const fields = [
  {
    name: 'form_message',
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    title: 'A simple example of TrainsForm',
  },
  {
    name: 'pet_name',
    type: FORM_CONSTANTS.TEXT_TYPE,
    title: 'Pet Name',
  },
  {
    name: 'pet_type',
    type: FORM_CONSTANTS.RADIO_TYPE,
    title: 'Pet Type',
  },
];

const values = { pet_name: 'Shilee' };

const options = {
  pet_type: [
    { label: 'Dog', value: 1 },
    { label: 'Cat', value: 2 },
    { label: 'Bird', value: 3 },
    { label: 'Other', value: 4 },
  ],
};

const [formRender, {
  getFormDetails,
  resetFormValues,
  validateFormValues,
}] = useForm({
  fields, values, options, mode: FORM_CONSTANTS.EDIT_MODE,
});

return (
  <div>
    {formRender()}
    <button
      onClick={() => {
        const details = getFormDetails();
        console.log(details.isReady, details.values, details.errors);
      }}
    >
      Get form status, values, errors.
    </button>
    <button onClick={resetFormValues}>
      Reset to form initial values.
    </button>
    <button onClick={validateFormValues}>
      Validate all fields and display error messages.
    </button>
  </div>
);
```

## Configuration

### Form Props
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Effect</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fields</td>
      <td>Array: field definition objects</td>
      <td>Render form field accordingly.</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>Values</td>
      <td>Object: field name/value pairs</td>
      <td>
        Object keys come from field names, object values turn into field values.
      </td>
      <td>{}</td>
    </tr>
    <tr>
      <td>Options</td>
      <td>Object: options for select type fields</td>
      <td>
        Object keys come from field names, object values(Array: Objects contain label and value keys) turn into field options.
      </td>
      <td>{}</td>
    </tr>
    <tr>
      <td>Mode</td>
      <td>'View'/'Edit'</td>
      <td>Render fields for display/edit purpose.</td>
      <td>'Edit'</td>
    </tr>
    <tr>
      <td>Theme</td>
      <td>'Semantic'/'Bootstrap'</td>
      <td>Determine overall styles used for form.</td>
      <td>'Semantic'</td>
    </tr>
    <tr>
      <td>isLoading</td>
      <td>Boolean</td>
      <td>Disable all fields and show loading effect while true.</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onSubmit</td>
      <td>Function</td>
      <td>
        Built-in submit button will be rendered when provided, and this function will be called with form values if there's no validation error after submit button clicked.
      </td>
      <td>null</td>
    </tr>
  </tbody>
</table>

### Form Configs
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Effect</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>spacing</td>
      <td>Number</td>
      <td>Spacing used among fields by px.</td>
      <td>20</td>
    </tr>
    <tr>
      <td>innerSpacing</td>
      <td>Number</td>
      <td>Spacing used among fields by px.</td>
      <td>10</td>
    </tr>
    <tr>
      <td>validateOnInitial</td>
      <td>Boolean</td>
      <td>
        Determine should validate fields on initial form or not.
      </td>
      <td>false</td>
    </tr>
    <tr>
      <td>validateOnChange</td>
      <td>Boolean</td>
      <td>
        Determine should validate field on value changes or not. This will not affect validation on submit.
      </td>
      <td>true</td>
    </tr>
    <tr>
      <td>viewAsMessage</td>
      <td>Boolean</td>
      <td>
        Display fields in view mode as plain messages rather than disabled fields.
      </td>
      <td>false</td>
    </tr>
    <tr>
      <td>submitTitle</td>
      <td>String</td>
      <td>Customize the name of submit button.</td>
      <td>'Submit'</td>
    </tr>
    <tr>
      <td>submitError</td>
      <td>String</td>
      <td>Customize the content of error message when submit error occurs.</td>
      <td>'Please check your inputs!'</td>
    </tr>
    <tr>
      <td>requiredError</td>
      <td>String</td>
      <td>Customize the content of error message on required fields globally.</td>
      <td>'This field is required.'</td>
    </tr>
  </tbody>
</table>

### Field Props
<table>
  <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Value
      </th>
      <th>
        Effect
      </th>
      <th>
        Default
      </th>
      <th>
        Available to field types
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        width
      </td>
      <td>
        Number
      </td>
      <td>
        Determine the width of a field by percentage in a row.
      </td>
      <td>
        100
      </td>
      <td>
        Message, Text, Email, Number, Integer, Quantity, Password, Note, Toggle, Radio, Checkbox, Items, SingleSelect, Switch, Date
      </td>
    </tr>
    <tr>
      <td>
        placeholder
      </td>
      <td>
        String
      </td>
      <td>
        Define the placeholder value of a field.
      </td>
      <td></td>
      <td>
        Text, Email, Number, Integer, Password, Note, Toggle, SingleSelect, Items,
      </td>
    </tr>
    <tr>
      <td>
        default
      </td>
      <td>
        Any(According to field type)
      </td>
      <td>
        Default value to be used if field value not provided by form values object.
      </td>
      <td></td>
      <td>
        Message, Text, Email, Number, Integer, Quantity, Note, Toggle, Radio, Checkbox, Items, SingleSelect, Switch, Date
      </td>
    </tr>
    <tr>
      <td>
        disabled
      </td>
      <td>
        Boolean
      </td>
      <td>
        Determine a field is editable or not in Edit mode.
      </td>
      <td>
        false
      </td>
      <td>
        Message, Text, Email, Number, Integer, Quantity, Password, Note, Toggle, Radio, Checkbox, Items, SingleSelect, Switch, Date
      </td>
    </tr>
    <tr>
      <td>
        required
      </td>
      <td>
        Boolean
      </td>
      <td>
        Determine a field is required or not.
      </td>
      <td>
        false
      </td>
      <td>
        Message, Text, Email, Number, Integer, Quantity, Password, Note, Toggle, Radio, Checkbox, Items, SingleSelect, Switch, Date
      </td>
    </tr>
    <tr>
      <td>
        requiredError
      </td>
      <td>
        String
      </td>
      <td>
        Define the content of error message for require validation.
      </td>
      <td>
        (Same as Form Configs requiredError)
      </td>
      <td>
        Message, Text, Email, Number, Integer, Quantity, Password, Note, Toggle, Radio, Checkbox, Items, SingleSelect, Switch, Date
      </td>
    </tr>
    <tr>
      <td>
        match
      </td>
      <td>
        Regx
      </td>
      <td>
        Require value match the regx provided.
      </td>
      <td></td>
      <td>
        Text, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        matchError
      </td>
      <td>
        String
      </td>
      <td>
        Define the content of error message for regx validation.
      </td>
      <td>
        `Regx: ${field.match}`
      </td>
      <td>
        Text, Email, Password, Note
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        min
      </td>
      <td rowspan="3">
        Number
      </td>
      <td>
        Min character required.
      </td>
      <td rowspan="4"></td>
      <td>
        Text, Email, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        Min number required.
      </td>
      <td>
        Number, Integer, Quantity
      </td>
    </tr>
    <tr>
      <td>
        Min selection required.
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td>
        Date
      </td>
      <td>
        Min date required.
      </td>
      <td>
        Date
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        minError
      </td>
      <td rowspan="4">
        String
      </td>
      <td rowspan="4">
        Define the content of error message for min validation.
      </td>
      <td>
        `Minimum ${field.min} characters required.`
      </td>
      <td>
        Text, Email, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        `Number is required to be no less than ${field.min}.`
      </td>
      <td>
        Number, Integer, Quantity
      </td>
    </tr>
    <tr>
      <td>
        `Minimum ${field.min} selection required.`
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td>
        `Date is required to be no earlier than ${field.min}.`
      </td>
      <td>
        Date
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        max
      </td>
      <td rowspan="3">
        Number
      </td>
      <td>
        Max character allowed.
      </td>
      <td rowspan="4"></td>
      <td>
        Text, Email, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        Max number allowed.
      </td>
      <td>
        Number, Integer, Quantity
      </td>
    </tr>
    <tr>
      <td>
        Max selection allowed.
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td>
        Date
      </td>
      <td>
        Max date allowed.
      </td>
      <td>
        Date
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        maxError
      </td>
      <td rowspan="4">
        String
      </td>
      <td rowspan="4">
        Define the content of error message for max validation.
      </td>
      <td>
        `Maximum ${field.max} characters allowed.`
      </td>
      <td>
        Text, Email, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        `Number is required to be no greater than ${field.max}.`
      </td>
      <td>
        Number, Integer, Quantity
      </td>
    </tr>
    <tr>
      <td>
        `Maximum ${field.max} selection allowed.`
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td>
        `Date is required to be no later than ${field.max}.`
      </td>
      <td>
        Date
      </td>
    </tr>
  </tbody>
</table>
