import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage.tsx';
import Details from './pages/Details.tsx';
import AppLayout from './ui/AppLayout.tsx';
import PageNotFound from './pages/PageNotFound.tsx';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/country/:countryName',
        element: <Details />,
      },
    ],
  },
  { path: '*', element: <PageNotFound /> },
]);
