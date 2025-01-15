import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../MainLayout/Main';
import Home from '../Pages/Home/home';
import Login from '../Pages/login';
import Register from '../Pages/Register';
import Products from '../Pages/Products/Products';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path: "products",
          element: <Products></Products>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path:"login",
          element: <Login></Login>
        }
      ]
    },
    
  ]);

export default router;