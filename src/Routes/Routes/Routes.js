import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";

import Main from "../../Layouts/Main";
import AdvertistMent from "../../Pages/AdvertistMent/AdvertistMent";
import Blog from "../../Pages/Blog/Blog";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ReportedProducts from "../../Pages/Dashboard/Dashboard/ReportedProducts/ReportedProducts";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
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
        path: '/advertised',
        element: <AdvertistMent></AdvertistMent>
      },
      {
        path: 'products/category/:id',
        element: <CategoryItems></CategoryItems>,
        loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/products/category/${params.id}`)
      },
      {
        path: 'home/category/:id',
        element: <CategoryItems></CategoryItems>,
        loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/products/category/${params.id}`)
      },
      {
        path: '/category/:id',
        element: <CategoryItems></CategoryItems>,
        loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/products/category/${params.id}`)
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
        path: '/dashboard/reported-products',
        element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
      },
      {
        path: '/dashboard/addproduct',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/myproducts',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: '/dashboard/payment/:id',
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: ({params}) => fetch(`https://final-project-server-zeta.vercel.app/bookings/${params.id}`)
      },
    ]
  }
])

export default router;