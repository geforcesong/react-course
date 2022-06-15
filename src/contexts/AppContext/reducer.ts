import ActionBase from '../../types/ActionBase';

import { ActionType } from './actions';

export type State = {
  dialogStatus: boolean;
};

const initialState: State = {
  dialogStatus: false,
};

const reducer = (state: State, action: ActionBase): State => {
  if (
    action.type === ActionType.OpenDialog ||
    action.type === ActionType.CloseDialog
  ) {
    return {
      ...state,
      dialogStatus: action.payload,
    };
  }

  return state;
};

export { initialState };

export default reducer;
