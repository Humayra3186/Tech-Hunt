import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

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
import AdminRoute from '../private/AdminRoute';
import ManageCoupons from '../Pages/DashBoard/Admin/ManageCoupons';
import Statistics from '../Pages/DashBoard/Admin/Statistics';
import Payment from '../payment/Payment';
import ModeratorRoute from '../private/ModeratorRoute';
import ProductReview from '../Pages/DashBoard/Moderator/ProductReview';
import Details from '../Pages/Details/Details';
import Home from '../Pages/Home/Home';

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
          path: "product/:id",
          element: <Details></Details>
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
          path: "/dashboard/profile",
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
          path: "dashboard/payment",
          element :<PrivetRoute> <Payment></Payment></PrivetRoute>
        },
        {
          path: "dashboard/updateProduct/:id",
          element :<PrivetRoute> <UpdateProduct></UpdateProduct></PrivetRoute>
        },
        {
          path: "dashboard/manageUser",
          element :<PrivetRoute> <AdminRoute><ManageUser></ManageUser></AdminRoute></PrivetRoute>
        },
        {
          path: "dashboard/manageCoupons",
          element :<PrivetRoute> <AdminRoute><ManageCoupons></ManageCoupons></AdminRoute></PrivetRoute>
        },
        {
          path: "dashboard/statistics",
          element :<PrivetRoute> <AdminRoute><Statistics></Statistics></AdminRoute></PrivetRoute>
        },
        {
          path: "dashboard/products",
          element :<PrivetRoute><ModeratorRoute><ProductReview></ProductReview></ModeratorRoute></PrivetRoute>
        }
      ]
    }
    
  ]);

export default router;