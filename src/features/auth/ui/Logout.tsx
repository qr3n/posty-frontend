import { AuthContext } from "react-oauth2-code-pkce";
import { useContext } from "react";

export const Logout = () => {
    const { logOut } = useContext(AuthContext)

    return (
        <button onClick={() => logOut()}>
            Log out
        </button>
    )
}