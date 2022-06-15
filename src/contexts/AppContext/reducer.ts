import ActionBase from '../../types/ActionBase';
import DialogProps from '../../types/DialogProps';

import { ActionType } from './actions';

export type State = {
  dialogProps: DialogProps;
};

const initialState: State = {
  dialogProps: {
    title: '',
    body: '',
    isOpen: null,
    component: undefined,
  },
};

const reducer = (state: State, action: ActionBase): State => {
  if (action.type === ActionType.OpenDialog) {
    return {
      ...state,
      dialogProps: action.payload,
    };
  }

  if (action.type === ActionType.CloseDialog) {
    return {
      ...state,
      dialogProps: {
        isOpen: false,
        title: '',
        body: '',
        component: undefined,
      },
    };
  }

  return state;
};

export { initialState };

export default reducer;
