import { useRecoilState, useRecoilValue } from "recoil";
import { sessionState } from "./atoms.ts";
import { useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export const useSession = () => {
    return useRecoilValue(sessionState)
}

export const useSessionStore = () => {
    return useRecoilState(sessionState)
}

export const useAccessToken = () => {
    const { token } = useContext(AuthContext)

    return token
}

export const useAuth = () => {
    const session = useSession()

    return !!session
}