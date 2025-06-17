import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import login from "../components/Login/login";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "login",
            Component: login,
        },
        {
            path: "register",
            Component: Register,
        }
    ]
  },
]);