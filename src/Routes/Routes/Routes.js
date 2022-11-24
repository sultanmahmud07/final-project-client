import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Main from "../../Layouts/Main";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";
import Error from "../../Pages/Shared/Error/Error";

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
        path: 'products/category/:id',
        element: <CategoryItems></CategoryItems>,
        loader: ({params}) => fetch(`http://localhost:5000/products/category/${params.id}`)
      },
    ]
  }
])

export default router;