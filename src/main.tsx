import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import AppContextProvider from './contexts/AppContext';
import AppDialog from './components/common/AppDialog';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <>
      <App />
      <AppDialog />
    </>
  </AppContextProvider>,
);
