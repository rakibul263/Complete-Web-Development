import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login /Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: 'login',
            Component: Login,
        }
    ]
  },
]);

export default router;
