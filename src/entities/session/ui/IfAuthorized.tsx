import { ReactElement } from "react";
import { sessionModel } from "..";

interface IProps {
    children: ReactElement[] | ReactElement,
    else: ReactElement
}

export const IfAuthorized = (props: IProps) => {
    const isAuthorized = sessionModel.selectors.useAuth()

    return isAuthorized ? props.children : props.else
}