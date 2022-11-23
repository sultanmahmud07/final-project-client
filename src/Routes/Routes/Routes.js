import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Shared/Error/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

export default router;