
import Login from "../Auth/Login";
import { Navigate } from "react-router-dom";

const HomePage = () => {
    const isLoggedIn = true;

    const handleLogout = () => {
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