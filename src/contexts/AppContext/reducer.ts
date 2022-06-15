import ActionBase from '../../types/ActionBase';

import { ActionType } from './actions';

export type State = {
  userName: string;
};

const initialState: State = {
  userName: 'George',
};

const reducer = (state: State, action: ActionBase): State => {
  if (action.type === ActionType.SetUserName) {
    return {
      ...state,
      userName: action.payload,
    };
  }

  return state;
};

export { initialState };

export default reducer;
