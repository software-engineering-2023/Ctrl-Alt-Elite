import { HOME_PATH, LOGIN_PATH, REGISTER_PATH , CLIENT_PATH} from "./paths";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import HomePage from "../Screens/Home";
import LandingPage from "../Screens/Landing Page/LandingPage"
import ClientPage from "../Screens/Client Page/ClientPage"

export const routes = [
    {
        path: HOME_PATH,
        element: <LandingPage />
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
        path: CLIENT_PATH,
        element: <ClientPage />,
    },
   
]