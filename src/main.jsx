import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.scss';

// pages
import App from './App.jsx';
import Home from "./pages/Home/Home.jsx"
import MovieDetails from "./pages/MovieDetail/MovieDetails.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
