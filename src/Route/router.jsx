import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/home';
import Login from '../Pages/login';
import Register from '../Pages/Register';
import Products from '../Pages/Products/Products';
import MainPage from '../MainLayout/MainPage';
import Dashboard from '../Pages/DashBoard/Dashboard';
import Profile from '../Pages/DashBoard/User/Profile';
import PrivetRoute from '../private/PrivetRoute';
import Add from '../Pages/DashBoard/User/Add';
import AddedProduct from '../Pages/DashBoard/User/AddedProduct';
import UpdateProduct from '../Pages/DashBoard/User/UpdateProduct';
import { Manipulation } from 'swiper/modules';
import ManageUser from '../Pages/DashBoard/Admin/ManageUser';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
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
    {
      path: "dashboard",
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children : [
        {
          path: "/dashboard",
          element :<PrivetRoute> <Profile></Profile></PrivetRoute>
        },
       
        {
          path: "dashboard/add",
          element :<PrivetRoute> <Add></Add></PrivetRoute>
        },
        {
          path: "dashboard/addedProduct",
          element :<PrivetRoute> <AddedProduct></AddedProduct></PrivetRoute>
        },
        {
          path: "dashboard/updateProduct/:id",
          element :<PrivetRoute> <UpdateProduct></UpdateProduct></PrivetRoute>
        },
        {
          path: "dashboard/manageUser",
          element :<PrivetRoute> <ManageUser></ManageUser></PrivetRoute>
        }
      ]
    }
    
  ]);

export default router;