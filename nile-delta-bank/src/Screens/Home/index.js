import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Store/slices/auth-slice";
import Login from "../Auth/Login";
import { Navigate } from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(authActions.logout());
    }

    return (
        <>
            {
                isLoggedIn ? (
                    <> 
                        <h1>Home Page</h1>
                        <button className="bg-red-400 p-2" onClick={handleLogout}>log out</button>
                    </>
                ): (
                    <Navigate to="/login" />
                )
            }
        </>
    )
}

export default HomePage;