import React, { useContext } from 'react';
import { SEMANTIC_THEME } from '../helpers/constants';
import Context from '../helpers/context';
import Fields from './Fields';

export default function Form() {
  const { configs } = useContext(Context);

  switch (configs.theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <form className="ui form">
          <Fields />
        </form>
      );
  }
}
