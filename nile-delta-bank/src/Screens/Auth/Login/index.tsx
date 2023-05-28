import { Navigate } from "react-router-dom";
const Login = () => {
    const isLoggedIn = true;
    
    const handleLogin = () => {
        
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