import React, { useContext } from 'react';
import { Form as SemanticForm } from 'semantic-ui-react';
import TrainsContext from '../helpers/context';
import FieldsWrapper from './FieldsWrapper';

export default function FormWrapper() {
  const trainsContext = useContext(TrainsContext);
  const { configs } = trainsContext;

  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <SemanticForm>
          <FieldsWrapper />
        </SemanticForm>
      );
  }
}
