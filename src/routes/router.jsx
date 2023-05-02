import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainPage from "../pages/Home/MainPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import Loader from "../pages/loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/loader",
        element: <Loader></Loader>,
      },
      {
        path: "/",
        element: <MainPage></MainPage>,
        loader: () =>
          fetch("https://assignment-10-server-md-borhan.vercel.app/slider"),
      },
      {
        path: "/recipes/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-md-borhan.vercel.app/recipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
