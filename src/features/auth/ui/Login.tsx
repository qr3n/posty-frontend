import { AuthContext } from "react-oauth2-code-pkce";
import { useContext } from "react";

export const Login = () => {
    const { login } = useContext(AuthContext)

    return (
        <button onClick={() => login()}>
            Get access
        </button>
    )
}