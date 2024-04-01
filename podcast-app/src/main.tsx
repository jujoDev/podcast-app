import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import EpisodePage from './pages/EpisodePage';
import NotFoundPage from './pages/NotFoundPage';

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
