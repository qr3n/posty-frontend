import { routes } from "./routes.tsx";
import { Routes, Route } from "react-router-dom";
import { AuthRequired } from "@entities/session";

export const Routing = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.protected
                        ? <AuthRequired strict>{route.page}</AuthRequired>
                        : route.page
                }/>
            )}
        </Routes>
    )
}