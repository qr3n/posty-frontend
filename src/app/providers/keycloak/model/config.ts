import { TAuthConfig } from "react-oauth2-code-pkce";
import { KEYCLOAK_URL } from "@shared/api";

export const config: TAuthConfig = {
    clientId: 'posty-frontend',
    authorizationEndpoint: `${KEYCLOAK_URL}/protocol/openid-connect/auth`,
    tokenEndpoint:`${KEYCLOAK_URL}/protocol/openid-connect/token`,
    logoutEndpoint: `${KEYCLOAK_URL}/protocol/openid-connect/logout`,
    redirectUri: 'http://localhost:5173',
    scope: 'openid profile',
    decodeToken: true,
    autoLogin: false,
}