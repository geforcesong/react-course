export enum ActionType {
  OpenDialog = 'OPEN_DIALOG',
  CloseDialog = 'CLOSE_DIALOG',
}

export const openAppDialog = () => ({
  type: ActionType.OpenDialog,
  payload: true,
});

export const closeAppDialog = () => ({
  type: ActionType.CloseDialog,
  payload: false,
});
