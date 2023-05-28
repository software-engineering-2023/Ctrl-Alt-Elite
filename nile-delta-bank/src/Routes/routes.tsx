import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from "./paths";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import HomePage from "../Screens/Home";

export const routes = [
    {
        path: HOME_PATH,
        element: <HomePage />
    },
    {
        path: LOGIN_PATH,
        element: <Login />
    },
    {
        path: REGISTER_PATH,
        element: <Register />
    }
]