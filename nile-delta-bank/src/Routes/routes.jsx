import * as Routes from "./paths";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import HomePage from "../Screens/Home";
import LandingPage from "../Screens/Landing Page/LandingPage"
import ClientPage from "../Screens/Client Page/ClientPage"
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = [
    {
        path: Routes.HOME_PATH,
        element: <LandingPage />
    },
    {
        path: Routes.LOGIN_PATH,
        element: <Login />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.REGISTER_PATH,
        element: <Register />
    },
    {
        path: Routes.CLIENT_PATH,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },

    {
        path: Routes.CLIENT_MY_ACCOUNTS,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_CREDIT_CARDS,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_LOANS,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_PAY_BILLS,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_REPORT,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_NOTIFICATIONS,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_SETTINGS,
        element: <ClientPage />,
        parent: <ProtectedRoutes />
    },
   
]