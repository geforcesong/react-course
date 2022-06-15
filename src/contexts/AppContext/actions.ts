export enum ActionType {
  OpenDialog = 'OPEN_DIALOG',
  CloseDialog = 'CLOSE_DIALOG',
}

export const openAppDialog = ({
  title,
  body,
  component,
}: {
  title: string;
  body?: string;
  component?: () => JSX.Element;
}) => ({
  type: ActionType.OpenDialog,
  payload: {
    title,
    body,
    isOpen: true,
    component,
  },
});

export const closeAppDialog = () => ({
  type: ActionType.CloseDialog,
  payload: false,
});
