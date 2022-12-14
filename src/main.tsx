import React from 'react';

import { createRoot } from 'react-dom/client';
import { App } from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/global.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
);
