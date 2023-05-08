import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/home';
import Html from './Pages/html';
import Css from './Pages/css';
import JavaScript from './Pages/javascript';




const router = createBrowserRouter([
  {
    path: "/",
    element : <Home />,
    errorElement: <Home />,
  
  },

  {
    path: "/html",
    element : <Html />,
  
  },

  {
    path: "/css",
    element : <Css />,
  
  },
  {
    path: "/javascript",
    element : <JavaScript />,
  
  },












]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>

);
