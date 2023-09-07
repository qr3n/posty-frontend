import { sessionModel } from "@entities/session"
import { redirectToLogin } from "../../model";

export const AddYoutube = () => {
    const token = sessionModel.selectors.useAccessToken()

    return (
        <button onClick={() => redirectToLogin('youtube', token)}>
            Add youtube
        </button>
    )
}