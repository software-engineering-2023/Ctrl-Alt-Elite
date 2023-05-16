import { HOME_PATH, LOGIN_PATH, REGISTER_PATH , LANDING_PATH} from "./paths";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import HomePage from "../Screens/Home";
import LandingPage from "../pages/LandingPage"

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
    },
    {
        path: LANDING_PATH,
        element: <LandingPage />
    }
]