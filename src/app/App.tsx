import { AuthProvider } from "react-oauth2-code-pkce";
import { SessionProvider } from "./providers/session";
import { keycloakModel } from "./providers/keycloak";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "@widgets/navbar";
import { RecoilRoot } from "recoil";
import { Routing } from "./routing";

export const App = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <AuthProvider authConfig={keycloakModel.config}>
                    <SessionProvider>
                        <Navbar/>
                        <Routing/>
                    </SessionProvider>
                </AuthProvider>
            </RecoilRoot>
        </BrowserRouter>
    )
}
