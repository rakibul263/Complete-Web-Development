import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Signup from "../components/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
            path: "/login",
            Component: Login,
        },
        {
            path: "/register",
            Component: Register,
        },
        {
            path: "/signup",
            Component: Signup,
        }
    ]
  },
]);