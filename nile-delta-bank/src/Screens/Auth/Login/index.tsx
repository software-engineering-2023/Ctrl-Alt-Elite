import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
const Login = () => {
    const dispatch = useDispatch();

    const { user, isLoggedIn } = useSelector((state: any) => state.auth);
    
    const handleLogin = () => {
        
    }

    return (
        <>
            {
                isLoggedIn ? (
                    <Navigate to="/" />
                ) : (
                    <> 
                        <Navigate to="/register" />
                        {/* <h1>Login Page</h1>
                         <button className="bg-red-400 p-2" onClick={handleLogin}>Login</button> */}
                    </>
                )
            }
        </>
    )
}

export default Login;