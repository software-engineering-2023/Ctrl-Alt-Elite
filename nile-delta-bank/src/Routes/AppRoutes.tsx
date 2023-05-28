import { routes } from "./routes";
import {Route, Routes} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            {
                routes.map(({path, element}, index) => {
                    return (
                        <Route key={index} path={path} element={element} />
                    )
                })
            }
        </Routes>
    )
}

export default AppRoutes;