import { ReactElement } from "react";
import { Loadable } from "recoil";

interface IProps {
    query: Loadable<unknown>,
    onError: ReactElement | ReactElement[] | string | string[],
    children: ReactElement | ReactElement[] | string | string[]
}

export const LoadableComponent = (props: IProps) => {
    switch (props.query.state) {
        case 'loading':
            return <>Loading...</>

        case 'hasError':
            return <>{props.onError}</>

        case 'hasValue':
            return <>{props.children}</>
    }
}