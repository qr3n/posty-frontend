import { ReactElement, useContext, useEffect } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { sessionModel } from "@entities/session";

interface IProps {
    strict?: boolean,
    children: ReactElement | ReactElement[]
}

export const AuthRequired = (props: IProps) => {
    const isAuthorized = sessionModel.selectors.useAuth()
    const { login } = useContext(AuthContext)

    useEffect(() => {
        if (!isAuthorized && props.strict) login()

    }, [login, isAuthorized, props.strict]);

    return !isAuthorized ? <></> : props.children
}