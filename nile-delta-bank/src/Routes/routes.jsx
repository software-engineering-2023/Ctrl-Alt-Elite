import * as Routes from "./paths";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import HomePage from "../Screens/Home";
import LandingPage from "../Screens/Landing Page/LandingPage";

import MyAccounts from "../Screens/Client Page/MyAccounts";
import CreditCards from "../Screens/Client Page/CreditCards";
import Loans from "../Screens/Client Page/Loans";
import Notifications from "../Screens/Client Page/Notifications";
import ReportRequest from "../Screens/Client Page/ReportRequest";
import Settings from "../Screens/Client Page/Settings";
import PayBills from "../Screens/Client Page/PayBills";

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
        element: <MyAccounts />,
        parent: <ProtectedRoutes />
    },

    {
        path: Routes.CLIENT_MY_ACCOUNTS,
        element: <MyAccounts />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_CREDIT_CARDS,
        element: <CreditCards />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_LOANS,
        element: <Loans />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_PAY_BILLS,
        element: <PayBills />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_REPORT,
        element: <ReportRequest />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_NOTIFICATIONS,
        element: <Notifications />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_SETTINGS,
        element: <Settings />,
        parent: <ProtectedRoutes />
    },
   
]