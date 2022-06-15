import React, { createContext } from 'react';
import ActionBase from '../../types/ActionBase';
import CreateStore from './store';
import { State, initialState } from './reducer';

type AppContextProp = {
  children: React.ReactNode;
};

export interface TContext {
  state: State;
  dispatch: React.Dispatch<ActionBase>;
}

export const AppContext = createContext<TContext>({
  state: initialState,
  dispatch: () => undefined,
});

const AppContextProvider: React.FC<AppContextProp> = ({ children }) => {
  const store = CreateStore();
  return (
    <AppContext.Provider value={{ ...store }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
