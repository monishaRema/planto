import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import PrivateRoute from "./PrivateRoute";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdatePlant from "../Pages/UpdatePlant";
import AllPlants from "../Pages/AllPlants";
import Details from "../Pages/Details";
import { baseUrl } from "../config";
import About from "../Pages/About";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch(`${baseUrl}/latest-plants`),
        element: <Home />,
        errorElement: <Error></Error>
      },
      {
        path: "all-plants",
        element: <AllPlants />,
        loader: () => fetch(`${baseUrl}/`),
      },
      {
        path: "/add-plant",
        element: <PrivateRoute>
            <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path: "/my-plants",
        element: <PrivateRoute>
            <MyPlants></MyPlants>
        </PrivateRoute>
      },
      { 
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`${baseUrl}/plant/${params.id}`),
        element: <PrivateRoute>
            <Details></Details> 
        </PrivateRoute>
      },
      {
        path: "/about", 
        element: <About></About>
      },
    
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path:"/update-plant/:id",
         loader: ({ params }) =>
          fetch(`${baseUrl}/plant/${params.id}`),
        element: <PrivateRoute>
            <UpdatePlant></UpdatePlant>
        </PrivateRoute>
      },
      {
        path: "/*",
        element: <Error></Error>
      },


    ],

  },
]);
