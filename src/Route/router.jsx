import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../MainLayout/Main';
import Home from '../Pages/Home/home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
    
  ]);

export default router;