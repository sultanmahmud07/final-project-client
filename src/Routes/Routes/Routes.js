import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";

import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import Error from "../../Pages/Shared/Error/Error";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'products/category/:id',
        element: <CategoryItems></CategoryItems>,
        loader: ({params}) => fetch(`http://localhost:5000/products/category/${params.id}`)
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path: '/dashboard',
        element: <MyBooking></MyBooking>
      },
      {
        path: '/dashboard/alluser',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: '/dashboard/addproduct',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/myproducts',
        element: <SellerRoute><p>My product</p></SellerRoute>
      },
    ]
  }
])

export default router;