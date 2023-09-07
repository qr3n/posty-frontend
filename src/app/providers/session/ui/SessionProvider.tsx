import { ReactElement, useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { sessionModel } from "@entities/session";
import { api } from "@shared/api";

export const SessionProvider = (props: { children: ReactElement | ReactElement[] }) => {
    const [ session, setSession ] = sessionModel.selectors.useSessionStore()
    const [ loading, setLoading ] = useState(true)
    const { tokenData, token, loginInProgress} = useContext(AuthContext)

    useEffect(() => {
        if (session) return setLoading(false)
        if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        if (tokenData) {
            setSession({
                email: tokenData.email,
                name: tokenData.name
            })
        }

        else if (!token && !loginInProgress) setLoading(false)
    }, [loading, session, setSession, setLoading, tokenData, token, loginInProgress]);

    return loading ? <>Loading</> : props.children
}
