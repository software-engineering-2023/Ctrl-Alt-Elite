import "../../../css/register-page.css";
import { Input } from "antd";
const Register = () => {

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="register-card">
                <div className="register-icon">
                    <img src="res/registeration/login-illustration.svg" />
                </div>
                <div className="right-section">
                    <div className="gay-part">
                        <div className="mini-bank-icon">
                            <img style={{ width: "4rem", height: "4rem" }} src="res/registeration/Mini-Bank-Logo.svg" />
                        </div>
                        <div style={{ marginLeft: "4rem", marginBottom: "4rem" }}>
                            <h1 className="kalam-big">Registration</h1>
                            <p className="kalam-small">Join Nile Delta Bank!</p>
                        </div>
                        <div className="w-1/2 flex flex-col">

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register;