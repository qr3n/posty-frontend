import { sessionModel } from "@entities/session"
import { redirectToLogin } from "../../model";

export const AddTwitter = () => {
    const token = sessionModel.selectors.useAccessToken()

    return (
        <button onClick={() => redirectToLogin('twitter', token)}>
            Add twitter
        </button>
    )
}