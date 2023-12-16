// import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);

   

