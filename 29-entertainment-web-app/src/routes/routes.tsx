import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Bookmarks from '../pages/Bookmarks';
import NotFound from '../pages/NotFound';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/series',
        element: <Series />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const options = {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
};

export const router = createBrowserRouter(routes, options);
