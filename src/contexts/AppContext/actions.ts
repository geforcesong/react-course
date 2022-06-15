export enum ActionType {
  SetUserName = 'SET_USER_NAME',
}

export const setUserName = (name: string) => ({
  type: ActionType.SetUserName,
  payload: name,
});
