import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import AppContextProvider from './contexts/AppContext';
import AppDialog from './components/common/AppDialog';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { ApiSlice } from './api/apiSlice';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={ApiSlice}>
    <AppContextProvider>
      <>
        <App />
        <AppDialog />
      </>
    </AppContextProvider>
  </ApiProvider>,
);
