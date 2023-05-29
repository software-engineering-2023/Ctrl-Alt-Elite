import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "../../../css/login-page.css";

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
                        <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div className="login-card">
                                <div className="login-icon">
                                    <img src="res/registeration/login-illustration.svg" />
                                </div>
                                <div className="right-section">
                                    <div className="gay-part">
                                        <div className="mini-bank-icon">
                                            <img className="mr-16 mt-2" src="res/registeration/Mini-Bank-Logo.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Login;