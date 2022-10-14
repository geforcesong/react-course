import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import AppContextProvider from './contexts/AppContext';
import AppDialog from './components/common/AppDialog';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { ApiSlice } from './api/apiSlice';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={ApiSlice}>
    <AppContextProvider>
      <>
        <QueryClientProvider client={queryClient}>
          <App />
          <AppDialog />
        </QueryClientProvider>
      </>
    </AppContextProvider>
  </ApiProvider>,
);
