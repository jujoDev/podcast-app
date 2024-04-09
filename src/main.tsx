import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage/HomePage';
import PodcastPage from './pages/PodcastPage/PodcastPage';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ContextProvider from './context/ContextProvider';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />,
}, {
  path: '/:podcastId',
  element: <PodcastPage />,
}, {
  path: '/:podcastId/episode/:episodeId',
  element: <EpisodePage />,
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
