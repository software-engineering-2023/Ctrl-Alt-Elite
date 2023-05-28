import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../Store/slices/auth-slice";
import { Navigate } from "react-router-dom";
import NavMenu from "../../../components/NavMenu";

const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const handleLogin = () => {
        dispatch(authActions.login());
    }

    return (
        <>
            {
                isLoggedIn ? (
                    <Navigate to="/" />
                ) : (
                    <> 
                        <h1>Login Page</h1>
                         <button className="bg-red-400 p-2" onClick={handleLogin}>Login</button>
                    </>
                )
            }
        </>
    )
}

export default Login;