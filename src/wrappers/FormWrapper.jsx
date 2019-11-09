import React, { useContext } from 'react';
import TrainsContext from '../helpers/context';
import FieldsWrapper from './FieldsWrapper';

export default function FormWrapper() {
  const trainsContext = useContext(TrainsContext);
  const { configs } = trainsContext;

  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <form className="ui form">
          <FieldsWrapper />
        </form>
      );
  }
}
