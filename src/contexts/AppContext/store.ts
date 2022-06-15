import { useReducer } from 'react';

import { TContext } from './index';
import reducer, { initialState } from './reducer';

function CreateStore(): TContext {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
}

export default CreateStore;
