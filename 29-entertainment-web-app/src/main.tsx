import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchContextProvider } from './context/search/SearchProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </SearchContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
